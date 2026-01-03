import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // ============================================
  // PERFORMANCE OPTIMIZATIONS
  // ============================================
  
  build: {
    // Target modern browsers for smaller bundle
    target: 'es2020',
    
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks (rarely change = better caching)
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['lucide-react'],
          'vendor-animation': ['motion'],
          'vendor-forms': ['react-hook-form'],
          'vendor-utils': ['clsx', 'tailwind-merge', 'date-fns'],
          
          // Radix UI components (group by usage)
          'vendor-radix-core': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-accordion',
            '@radix-ui/react-popover',
            '@radix-ui/react-tabs',
          ],
          
          // Data and context
          'app-data': [
            './src/app/data/pages',
            './src/app/data/posts',
            './src/app/data/portfolio',
            './src/app/data/faqs',
            './src/app/data/services',
            './src/app/data/testimonials',
          ],
          
          // Common components (used across many templates)
          'app-common': [
            './src/app/components/common/Button',
            './src/app/components/common/Container',
            './src/app/components/common/Section',
            './src/app/components/common/Heading',
          ],
          
          // Template parts (header/footer)
          'app-parts': [
            './src/app/components/parts/SiteHeader',
            './src/app/components/parts/SiteFooter',
          ],
          
          // Patterns (reusable sections)
          'app-patterns': [
            './src/app/components/patterns/HeroHome',
            './src/app/components/patterns/CardGrid',
            './src/app/components/patterns/CTASection',
            './src/app/components/patterns/FAQSection',
          ],
        },
        
        // Optimize chunk file names for caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/js/[name]-[hash].js`;
        },
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console.log in production
        drop_console: true,
        // Remove debugger statements
        drop_debugger: true,
        // Remove unused code
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      format: {
        // Remove comments
        comments: false,
      },
    },
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Source maps (disable in production for smaller files)
    sourcemap: false,
    
    // Chunk size warnings
    chunkSizeWarningLimit: 500, // KB
    
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets < 4KB as base64
  },
  
  // Development server optimizations
  server: {
    hmr: {
      overlay: true,
    },
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lucide-react',
      'motion',
    ],
    exclude: [
      // Exclude large unused dependencies
    ],
  },
})
