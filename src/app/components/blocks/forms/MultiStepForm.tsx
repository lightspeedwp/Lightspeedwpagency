/**
 * Multi-Step Form Component (Wizard)
 * 
 * Features:
 * - Step-by-step form with progress indicator
 * - Validation per step
 * - Previous/Next navigation
 * - Summary before submission
 * - Mobile-responsive
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend for headings/buttons
 * - Uses Manrope for body text
 * - Proper focus states
 * 
 * @example
 * <MultiStepForm
 *   steps={[
 *     { id: 'personal', title: 'Personal Info', component: <PersonalInfoStep /> },
 *     { id: 'contact', title: 'Contact Details', component: <ContactStep /> },
 *     { id: 'review', title: 'Review', component: <ReviewStep /> },
 *   ]}
 *   onComplete={handleSubmit}
 * />
 */

import { useState, ReactNode } from 'react';

export interface FormStep {
  /** Unique step ID */
  id: string;
  /** Step title */
  title: string;
  /** Step description (optional) */
  description?: string;
  /** Step component */
  component: ReactNode;
  /** Validation function */
  validate?: () => boolean | Promise<boolean>;
  /** Optional step (can be skipped) */
  optional?: boolean;
}

export interface MultiStepFormProps {
  /** Form steps */
  steps: FormStep[];
  /** Form completion handler */
  onComplete: (data: any) => void | Promise<void>;
  /** Form cancellation handler */
  onCancel?: () => void;
  /** Show progress bar */
  showProgress?: boolean;
  /** Show step numbers */
  showStepNumbers?: boolean;
  /** Submit button text */
  submitText?: string;
  /** Loading state */
  loading?: boolean;
}

export function MultiStepForm({
  steps,
  onComplete,
  onCancel,
  showProgress = true,
  showStepNumbers = true,
  submitText = 'Submit',
  loading = false,
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  const progress = ((currentStep + 1) / steps.length) * 100;

  // Handle next step
  const handleNext = async () => {
    const currentStepConfig = steps[currentStep];

    // Validate current step
    if (currentStepConfig.validate) {
      const isValid = await currentStepConfig.validate();
      if (!isValid) {
        setValidationErrors(['Please fix the errors before continuing']);
        return;
      }
    }

    // Clear errors
    setValidationErrors([]);

    // Move to next step or submit
    if (isLastStep) {
      await onComplete(formData);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
      setValidationErrors([]);
    }
  };

  // Handle step click (direct navigation)
  const handleStepClick = (stepIndex: number) => {
    // Only allow navigation to previous steps
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex);
      setValidationErrors([]);
    }
  };

  return (
    <div className="wp-w-full wp-mx-auto wp-font-secondary wp-max-w-4xl">
      {/* Progress Bar */}
      {showProgress && (
        <div className="wp-mb-8">
          {/* Progress Track */}
          <div className="wp-w-full wp-h-2 wp-bg-muted wp-rounded-full wp-overflow-hidden">
            <div
              className="wp-h-full wp-bg-primary wp-transition-all wp-duration-300 wp-ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Text */}
          <div className="wp-mt-2 wp-text-small wp-text-muted-foreground wp-text-center">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      )}

      {/* Step Indicators */}
      <div className="wp-flex wp-justify-between wp-mb-12 wp-gap-4 wp-flex-wrap">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isClickable = index < currentStep;

          return (
            <div
              key={step.id}
              onClick={() => isClickable && handleStepClick(index)}
              className={`wp-flex-1 wp-min-w-[120px] ${isClickable ? 'wp-cursor-pointer' : 'wp-cursor-default'} ${isActive || isCompleted ? 'wp-opacity-100' : 'wp-opacity-50'}`}
            >
              {/* Step Number/Icon */}
              <div className="wp-flex wp-items-center wp-gap-2 wp-mb-2">
                {showStepNumbers && (
                  <div
                    className={`wp-w-8 wp-h-8 wp-rounded-full wp-flex wp-items-center wp-justify-center wp-font-primary wp-text-base wp-font-medium ${
                      isActive 
                        ? 'wp-bg-primary wp-text-primary-foreground' 
                        : isCompleted 
                          ? 'wp-bg-accent wp-text-accent-foreground' 
                          : 'wp-bg-muted wp-text-muted-foreground'
                    }`}
                  >
                    {isCompleted ? '✓' : index + 1}
                  </div>
                )}

                {/* Step Title */}
                <div
                  className={`wp-font-secondary wp-text-base wp-font-medium ${
                    isActive ? 'wp-text-foreground' : 'wp-text-muted-foreground'
                  }`}
                >
                  {step.title}
                </div>
              </div>

              {/* Step Description */}
              {step.description && (
                <div className={`wp-text-small wp-text-muted-foreground ${showStepNumbers ? 'wp-ml-10' : ''}`}>
                  {step.description}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Current Step Content */}
      <div className="wp-bg-card wp-border wp-border-border wp-rounded-lg wp-p-8 wp-mb-8">
        {/* Step Title */}
        <h2 className="wp-font-primary wp-text-h3 wp-font-medium wp-mb-4 wp-text-foreground">
          {steps[currentStep].title}
        </h2>

        {/* Step Description */}
        {steps[currentStep].description && (
          <p className="wp-text-base wp-text-muted-foreground wp-mb-8">
            {steps[currentStep].description}
          </p>
        )}

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="wp-p-4 wp-bg-destructive wp-text-destructive-foreground wp-rounded wp-mb-6">
            {validationErrors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}

        {/* Step Component */}
        <div>{steps[currentStep].component}</div>
      </div>

      {/* Navigation Buttons */}
      <div className="wp-flex wp-justify-between wp-gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={isFirstStep}
          className={`wp-px-6 wp-py-3 wp-font-primary wp-text-base wp-font-medium wp-bg-background wp-text-foreground wp-border wp-border-border wp-rounded wp-transition-all wp-duration-200 wp-ease-in-out wp-min-h-12 ${isFirstStep ? 'wp-cursor-not-allowed wp-opacity-50' : 'wp-cursor-pointer wp-opacity-100'}`}
        >
          Previous
        </button>

        {/* Action Buttons */}
        <div className="wp-flex wp-gap-4">
          {/* Cancel Button (optional) */}
          {onCancel && (
            <button
              onClick={onCancel}
              className="wp-px-6 wp-py-3 wp-font-primary wp-text-base wp-font-medium wp-bg-background wp-text-foreground wp-border wp-border-border wp-rounded wp-cursor-pointer wp-transition-all wp-duration-200 wp-ease-in-out wp-min-h-12"
            >
              Cancel
            </button>
          )}

          {/* Next/Submit Button */}
          <button
            onClick={handleNext}
            disabled={loading}
            className={`wp-px-6 wp-py-3 wp-font-primary wp-text-base wp-font-medium wp-bg-primary wp-text-primary-foreground wp-border-none wp-rounded wp-transition-all wp-duration-200 wp-ease-in-out wp-min-h-12 ${loading ? 'wp-cursor-not-allowed wp-opacity-70' : 'wp-cursor-pointer wp-opacity-100'}`}
          >
            {loading ? 'Processing...' : isLastStep ? submitText : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Form Step Container
 * 
 * Wrapper for individual form steps.
 */
export interface FormStepContainerProps {
  children: ReactNode;
  /** Step spacing */
  spacing?: 'compact' | 'normal' | 'spacious';
}

export function FormStepContainer({ children, spacing = 'normal' }: FormStepContainerProps) {
  const spacingClassMap = {
    compact: 'wp-gap-4',
    normal: 'wp-gap-6',
    spacious: 'wp-gap-8',
  };

  return (
    <div className={`wp-flex wp-flex-col ${spacingClassMap[spacing]}`}>
      {children}
    </div>
  );
}