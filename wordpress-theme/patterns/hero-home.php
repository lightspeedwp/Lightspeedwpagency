<?php
/**
 * Title: Hero Home
 * Slug: lsx-design/hero-home
 * Categories: featured, hero
 * Description: Homepage hero section with heading, description, and CTA buttons
 * Keywords: hero, homepage, cta, heading
 * Viewport Width: 1280
 */
?>

<!-- wp:group {"align":"full","backgroundColor":"background","className":"hero-home","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull hero-home has-background-background-color has-background">
  
  <!-- wp:spacer {"height":"4rem"} -->
  <div style="height:4rem" aria-hidden="true" class="wp-block-spacer"></div>
  <!-- /wp:spacer -->
  
  <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
  <div class="wp-block-group">
    
    <!-- Eyebrow Text -->
    <!-- wp:paragraph {"align":"center","fontSize":"small","style":{"typography":{"fontFamily":"var(--wp--preset--font-family--primary)","textTransform":"uppercase","letterSpacing":"0.1em","fontWeight":"500"},"color":{"text":"var(--wp--preset--color--primary)"}}} -->
    <p class="has-text-align-center has-small-font-size" style="color:var(--wp--preset--color--primary);font-family:var(--wp--preset--font-family--primary);font-weight:500;text-transform:uppercase;letter-spacing:0.1em">WordPress Design System</p>
    <!-- /wp:paragraph -->
    
    <!-- Main Heading (H1) - ONLY ONE H1 PER PAGE -->
    <!-- wp:heading {"textAlign":"center","level":1,"fontSize":"h1","style":{"typography":{"fontFamily":"var(--wp--preset--font-family--primary)","fontWeight":"500"}}} -->
    <h1 class="wp-block-heading has-text-align-center has-h-1-font-size" style="font-family:var(--wp--preset--font-family--primary);font-weight:500">Build Better WordPress Websites with LSX Design</h1>
    <!-- /wp:heading -->
    
    <!-- Description -->
    <!-- wp:paragraph {"align":"center","fontSize":"lg","style":{"typography":{"fontFamily":"var(--wp--preset--font-family--secondary)"},"color":{"text":"var(--wp--preset--color--muted-foreground)"},"spacing":{"margin":{"top":"1.5rem"}}}} -->
    <p class="has-text-align-center has-lg-font-size" style="color:var(--wp--preset--color--muted-foreground);font-family:var(--wp--preset--font-family--secondary);margin-top:1.5rem">Modern, accessible block themes built with Full Site Editing and token-driven design systems.</p>
    <!-- /wp:paragraph -->
    
    <!-- CTA Buttons -->
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"2rem"}}}} -->
    <div class="wp-block-buttons" style="margin-top:2rem">
      
      <!-- Primary Button -->
      <!-- wp:button {"backgroundColor":"primary","textColor":"primary-foreground","className":"is-style-fill","style":{"typography":{"fontFamily":"var(--wp--preset--font-family--primary)","fontWeight":"500"},"border":{"radius":"4px"},"spacing":{"padding":{"top":"12px","right":"24px","bottom":"12px","left":"24px"}}}} -->
      <div class="wp-block-button is-style-fill">
        <a class="wp-block-button__link has-primary-foreground-color has-primary-background-color has-text-color has-background wp-element-button" style="border-radius:4px;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-family:var(--wp--preset--font-family--primary);font-weight:500">Get Started</a>
      </div>
      <!-- /wp:button -->
      
      <!-- Secondary Button (Outline) -->
      <!-- wp:button {"backgroundColor":"background","textColor":"foreground","className":"is-style-outline","style":{"typography":{"fontFamily":"var(--wp--preset--font-family--primary)","fontWeight":"500"},"border":{"radius":"4px","width":"1px","color":"var(--wp--preset--color--border)"},"spacing":{"padding":{"top":"12px","right":"24px","bottom":"12px","left":"24px"}}}} -->
      <div class="wp-block-button is-style-outline">
        <a class="wp-block-button__link has-foreground-color has-background-background-color has-text-color has-background wp-element-button" style="border-color:var(--wp--preset--color--border);border-width:1px;border-radius:4px;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-family:var(--wp--preset--font-family--primary);font-weight:500">View Our Work</a>
      </div>
      <!-- /wp:button -->
      
    </div>
    <!-- /wp:buttons -->
    
  </div>
  <!-- /wp:group -->
  
  <!-- wp:spacer {"height":"4rem"} -->
  <div style="height:4rem" aria-hidden="true" class="wp-block-spacer"></div>
  <!-- /wp:spacer -->
  
</div>
<!-- /wp:group -->
