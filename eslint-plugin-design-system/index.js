/**
 * ESLint Plugin for LSX Design System Compliance
 * 
 * Custom rules to enforce design system best practices:
 * - No hardcoded colors (use CSS variables)
 * - No hardcoded font sizes (use CSS variables)
 * - Only approved fonts (Lexend, Manrope)
 * - No inline spacing (use Tailwind classes)
 * - Require CSS variables for colors
 * - WCAG-compliant touch targets
 */

module.exports = {
  rules: {
    /**
     * Rule: no-hardcoded-colors
     * Prevents hardcoded color values (hex, rgb, rgba, hsl, hsla)
     */
    'no-hardcoded-colors': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow hardcoded color values - use CSS variables instead',
          category: 'Design System',
          recommended: true
        },
        messages: {
          hardcodedColor: 'Hardcoded color "{{value}}" found. Use CSS variable instead (e.g., var(--primary))',
          hardcodedBackground: 'Hardcoded background color "{{value}}" found. Use var(--background) or var(--card)',
          hardcodedTextColor: 'Hardcoded text color "{{value}}" found. Use var(--foreground) or semantic colors',
          hardcodedBorderColor: 'Hardcoded border color "{{value}}" found. Use var(--border) or var(--border-soft)'
        },
        fixable: 'code',
        schema: []
      },
      create(context) {
        const colorPatterns = {
          hex: /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/,
          rgb: /rgb\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/,
          rgba: /rgba\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/,
          hsl: /hsl\s*\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*\)/,
          hsla: /hsla\s*\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*,\s*[\d.]+\s*\)/
        };

        function checkForHardcodedColors(node, value) {
          if (typeof value !== 'string') return;
          
          // Skip if it's already a CSS variable
          if (value.includes('var(--')) return;
          
          // Check for color patterns
          for (const [type, pattern] of Object.entries(colorPatterns)) {
            if (pattern.test(value)) {
              const propertyName = node.key?.name || '';
              let messageId = 'hardcodedColor';
              
              // Provide specific guidance based on property
              if (propertyName.includes('background')) {
                messageId = 'hardcodedBackground';
              } else if (propertyName.includes('color')) {
                messageId = 'hardcodedTextColor';
              } else if (propertyName.includes('border')) {
                messageId = 'hardcodedBorderColor';
              }
              
              context.report({
                node,
                messageId,
                data: { value }
              });
            }
          }
        }

        return {
          // Check style prop objects
          JSXAttribute(node) {
            if (node.name.name === 'style' && node.value?.expression?.type === 'ObjectExpression') {
              node.value.expression.properties.forEach(prop => {
                if (prop.value?.type === 'Literal') {
                  checkForHardcodedColors(prop, prop.value.value);
                } else if (prop.value?.type === 'TemplateLiteral') {
                  prop.value.quasis.forEach(quasi => {
                    checkForHardcodedColors(prop, quasi.value.raw);
                  });
                }
              });
            }
          }
        };
      }
    },

    /**
     * Rule: no-hardcoded-font-sizes
     * Prevents hardcoded font size values (px, rem, em)
     */
    'no-hardcoded-font-sizes': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow hardcoded font sizes - use CSS variables instead',
          category: 'Design System',
          recommended: true
        },
        messages: {
          hardcodedFontSize: 'Hardcoded font size "{{value}}" found. Use CSS variable instead (e.g., var(--text-h1), var(--text-base))'
        },
        schema: []
      },
      create(context) {
        const fontSizePattern = /^\d+(\.\d+)?(px|rem|em|pt)$/;

        return {
          JSXAttribute(node) {
            if (node.name.name === 'style' && node.value?.expression?.type === 'ObjectExpression') {
              node.value.expression.properties.forEach(prop => {
                if (prop.key?.name === 'fontSize' && prop.value?.type === 'Literal') {
                  const value = prop.value.value;
                  if (typeof value === 'string' && fontSizePattern.test(value) && !value.includes('var(--')) {
                    context.report({
                      node: prop,
                      messageId: 'hardcodedFontSize',
                      data: { value }
                    });
                  }
                }
              });
            }
          }
        };
      }
    },

    /**
     * Rule: no-unapproved-fonts
     * Prevents use of fonts other than Lexend and Manrope
     */
    'no-unapproved-fonts': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Only allow approved design system fonts (Lexend, Manrope)',
          category: 'Design System',
          recommended: true
        },
        messages: {
          unapprovedFont: 'Font "{{font}}" is not approved. Only use Lexend or Manrope fonts'
        },
        schema: []
      },
      create(context) {
        const approvedFonts = ['Lexend', 'Manrope', 'sans-serif', 'serif', 'monospace'];

        return {
          JSXAttribute(node) {
            if (node.name.name === 'style' && node.value?.expression?.type === 'ObjectExpression') {
              node.value.expression.properties.forEach(prop => {
                if (prop.key?.name === 'fontFamily' && prop.value?.type === 'Literal') {
                  const value = prop.value.value;
                  if (typeof value === 'string') {
                    const fonts = value.split(',').map(f => f.trim().replace(/['"]/g, ''));
                    fonts.forEach(font => {
                      if (!approvedFonts.some(approved => font.includes(approved))) {
                        context.report({
                          node: prop,
                          messageId: 'unapprovedFont',
                          data: { font }
                        });
                      }
                    });
                  }
                }
              });
            }
          }
        };
      }
    },

    /**
     * Rule: no-inline-spacing
     * Warns against inline padding/margin (should use Tailwind classes)
     */
    'no-inline-spacing': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Prefer Tailwind classes for spacing instead of inline styles',
          category: 'Design System',
          recommended: true
        },
        messages: {
          inlineSpacing: 'Inline {{property}} found. Consider using Tailwind classes instead (e.g., className="p-6", "mb-8")'
        },
        schema: []
      },
      create(context) {
        const spacingProperties = ['padding', 'margin', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
                                   'marginTop', 'marginRight', 'marginBottom', 'marginLeft'];

        return {
          JSXAttribute(node) {
            if (node.name.name === 'style' && node.value?.expression?.type === 'ObjectExpression') {
              node.value.expression.properties.forEach(prop => {
                if (spacingProperties.includes(prop.key?.name)) {
                  context.report({
                    node: prop,
                    messageId: 'inlineSpacing',
                    data: { property: prop.key.name }
                  });
                }
              });
            }
          }
        };
      }
    },

    /**
     * Rule: require-css-variables
     * Enforces use of CSS variables for specific properties
     */
    'require-css-variables': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Require CSS variables for colors, borders, and radius',
          category: 'Design System',
          recommended: true
        },
        messages: {
          requireCssVariable: '{{property}} should use CSS variable (e.g., var(--{{suggestion}}))'
        },
        schema: []
      },
      create(context) {
        const propertyMap = {
          backgroundColor: 'background',
          color: 'foreground',
          borderColor: 'border',
          borderRadius: 'radius',
          border: 'border'
        };

        return {
          JSXAttribute(node) {
            if (node.name.name === 'style' && node.value?.expression?.type === 'ObjectExpression') {
              node.value.expression.properties.forEach(prop => {
                const propertyName = prop.key?.name;
                if (propertyMap[propertyName] && prop.value?.type === 'Literal') {
                  const value = prop.value.value;
                  if (typeof value === 'string' && !value.includes('var(--')) {
                    context.report({
                      node: prop,
                      messageId: 'requireCssVariable',
                      data: {
                        property: propertyName,
                        suggestion: propertyMap[propertyName]
                      }
                    });
                  }
                }
              });
            }
          }
        };
      }
    },

    /**
     * Rule: wcag-touch-targets
     * Warns if touch targets are smaller than WCAG AA/AAA requirements
     */
    'wcag-touch-targets': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Ensure touch targets meet WCAG size requirements (44×44px minimum)',
          category: 'Accessibility',
          recommended: true
        },
        messages: {
          smallTouchTarget: 'Touch target size {{size}} is below WCAG AA requirement (44×44px). Consider increasing to meet accessibility standards'
        },
        schema: []
      },
      create(context) {
        const minSize = 44;

        function checkSize(node, size) {
          const sizeValue = typeof size === 'string' 
            ? parseInt(size.replace(/px|rem|em/, '')) 
            : size;
          
          if (sizeValue < minSize) {
            context.report({
              node,
              messageId: 'smallTouchTarget',
              data: { size: `${sizeValue}px` }
            });
          }
        }

        return {
          JSXAttribute(node) {
            // Check buttons, links, and interactive elements
            const parentName = node.parent?.name?.name;
            const isInteractive = ['button', 'a', 'input'].includes(parentName) || 
                                 node.parent?.attributes?.some(attr => 
                                   attr.name?.name === 'onClick' || 
                                   attr.name?.name === 'role' && attr.value?.value === 'button'
                                 );
            
            if (isInteractive && node.name.name === 'style' && node.value?.expression?.type === 'ObjectExpression') {
              node.value.expression.properties.forEach(prop => {
                if (['minHeight', 'minWidth', 'height', 'width'].includes(prop.key?.name)) {
                  if (prop.value?.type === 'Literal') {
                    checkSize(prop, prop.value.value);
                  }
                }
              });
            }
          }
        };
      }
    }
  }
};
