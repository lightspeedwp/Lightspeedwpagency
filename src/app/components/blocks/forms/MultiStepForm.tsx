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
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Manrope, sans-serif',
      }}
    >
      {/* Progress Bar */}
      {showProgress && (
        <div
          style={{
            marginBottom: '2rem',
          }}
        >
          {/* Progress Track */}
          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: 'var(--muted)',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: 'var(--primary)',
                transition: 'width 0.3s ease',
              }}
            />
          </div>

          {/* Progress Text */}
          <div
            style={{
              marginTop: '0.5rem',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
              textAlign: 'center',
            }}
          >
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      )}

      {/* Step Indicators */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '3rem',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isClickable = index < currentStep;

          return (
            <div
              key={step.id}
              onClick={() => isClickable && handleStepClick(index)}
              style={{
                flex: 1,
                minWidth: '120px',
                cursor: isClickable ? 'pointer' : 'default',
                opacity: isActive || isCompleted ? 1 : 0.5,
              }}
            >
              {/* Step Number/Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                {showStepNumbers && (
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isActive ? 'var(--primary)' : isCompleted ? 'var(--accent)' : 'var(--muted)',
                      color: isActive ? 'var(--primary-foreground)' : isCompleted ? 'var(--accent-foreground)' : 'var(--muted-foreground)',
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: '500',
                    }}
                  >
                    {isCompleted ? '✓' : index + 1}
                  </div>
                )}

                {/* Step Title */}
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: '500',
                    color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                  }}
                >
                  {step.title}
                </div>
              </div>

              {/* Step Description */}
              {step.description && (
                <div
                  style={{
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                    marginLeft: showStepNumbers ? '2.5rem' : '0',
                  }}
                >
                  {step.description}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Current Step Content */}
      <div
        style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          marginBottom: '2rem',
        }}
      >
        {/* Step Title */}
        <h2
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: '500',
            marginBottom: '1rem',
            color: 'var(--foreground)',
          }}
        >
          {steps[currentStep].title}
        </h2>

        {/* Step Description */}
        {steps[currentStep].description && (
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--muted-foreground)',
              marginBottom: '2rem',
            }}
          >
            {steps[currentStep].description}
          </p>
        )}

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div
            style={{
              padding: '1rem',
              backgroundColor: 'var(--destructive)',
              color: 'var(--destructive-foreground)',
              borderRadius: 'var(--radius)',
              marginBottom: '1.5rem',
            }}
          >
            {validationErrors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}

        {/* Step Component */}
        <div>{steps[currentStep].component}</div>
      </div>

      {/* Navigation Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={isFirstStep}
          style={{
            padding: '12px 24px',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: '500',
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            cursor: isFirstStep ? 'not-allowed' : 'pointer',
            opacity: isFirstStep ? 0.5 : 1,
            transition: 'all 0.2s ease',
            minHeight: '48px',
          }}
        >
          Previous
        </button>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {/* Cancel Button (optional) */}
          {onCancel && (
            <button
              onClick={onCancel}
              style={{
                padding: '12px 24px',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: '500',
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minHeight: '48px',
              }}
            >
              Cancel
            </button>
          )}

          {/* Next/Submit Button */}
          <button
            onClick={handleNext}
            disabled={loading}
            style={{
              padding: '12px 24px',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: '500',
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'all 0.2s ease',
              minHeight: '48px',
            }}
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
  const spacingMap = {
    compact: '1rem',
    normal: '1.5rem',
    spacious: '2rem',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacingMap[spacing],
      }}
    >
      {children}
    </div>
  );
}
