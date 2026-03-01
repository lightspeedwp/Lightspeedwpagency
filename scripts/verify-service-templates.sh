#!/bin/bash
# Verify all 14 sub-service templates exist

echo "Verifying sub-service templates..."
echo ""

templates=(
  "SEOServiceTemplate"
  "AnalyticsServiceTemplate"
  "AIEngineServiceTemplate"
  "AnswerEngineServiceTemplate"
  "AccessibilityServiceTemplate"
  "MigrationsServiceTemplate"
  "SupportServiceTemplate"
  "ContentStrategyServiceTemplate"
  "ContentCollectionServiceTemplate"
  "ContentAuditServiceTemplate"
  "NewsletterServiceTemplate"
  "EmailMarketingServiceTemplate"
  "FigmaPrototypingServiceTemplate"
  "DesignSystemsServiceTemplate"
)

all_exist=true

for template in "${templates[@]}"; do
  file="src/app/components/templates/${template}.tsx"
  if [ -f "$file" ]; then
    echo "✅ $template exists"
  else
    echo "❌ $template MISSING"
    all_exist=false
  fi
done

echo ""

if [ "$all_exist" = true ]; then
  echo "✅ ALL 14 SUB-SERVICE TEMPLATES VERIFIED!"
  echo ""
  echo "If you're seeing import errors, restart your Vite dev server:"
  echo "  1. Stop the server (Ctrl+C)"
  echo "  2. Run: pnpm dev"
  echo ""
  exit 0
else
  echo "❌ Some templates are missing"
  exit 1
fi
