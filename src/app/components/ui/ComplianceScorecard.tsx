/**
 * Compliance Scorecard Page
 * 
 * Real-time testing and validation of:
 * - Fluid typography compliance
 * - Fluid spacing compliance
 * - Semantic HTML validation
 * - Font weight optimization
 * - CSS variable usage
 * - Core Web Vitals
 * 
 * Run tests on page load and display results
 */

import { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Check, X, AlertTriangle, TrendingUp, Zap } from 'lucide-react';
import { DesignSystemPerformanceTester, type ComplianceScorecard, type PerformanceTestResult } from '../../utils/performanceTester';

export function ComplianceScorecard() {
  const [scorecard, setScorecard] = useState<ComplianceScorecard | null>(null);
  const [results, setResults] = useState<PerformanceTestResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Run tests on mount
    const runTests = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const tester = new DesignSystemPerformanceTester();
        const { results: testResults, scorecard: testScorecard } = await tester.runAllTests();
        
        setResults(testResults);
        setScorecard(testScorecard);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Test failed');
        console.error('Test error:', err);
      } finally {
        setLoading(false);
      }
    };

    runTests();
  }, []);

  const getGradeColor = (score: number) => {
    if (score >= 95) return 'var(--primary)';
    if (score >= 90) return 'var(--primary)';
    if (score >= 80) return 'var(--accent)';
    if (score >= 70) return 'var(--muted-foreground)';
    return 'var(--destructive)';
  };

  const getGradeLabel = (score: number) => {
    if (score >= 95) return '⭐ A+';
    if (score >= 90) return '✅ A';
    if (score >= 80) return '👍 B';
    if (score >= 70) return '⚠️ C';
    if (score >= 60) return '⚠️ D';
    return '❌ F';
  };

  if (loading) {
    return (
      <main>
        <Section variant="canvas" className="py-24">
          <Container>
            <div className="text-center">
              <div 
                style={{ 
                  width: '64px',
                  height: '64px',
                  border: '6px solid var(--border)',
                  borderTopColor: 'var(--primary)',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 24px'
                }}
              />
              <Heading level={2}>Running Compliance Tests...</Heading>
              <p style={{
                fontSize: 'var(--text-base)',
                fontFamily: 'Manrope, sans-serif',
                color: 'var(--muted-foreground)',
                marginTop: '16px'
              }}>
                Testing fluid typography, spacing, semantic HTML, and performance
              </p>
            </div>
          </Container>
        </Section>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <Section variant="canvas" className="py-24">
          <Container>
            <div className="text-center">
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'var(--destructive)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}
              >
                <X size={32} style={{ color: 'var(--destructive-foreground)' }} />
              </div>
              <Heading level={2}>Test Error</Heading>
              <p style={{
                fontSize: 'var(--text-base)',
                fontFamily: 'Manrope, sans-serif',
                color: 'var(--destructive)',
                marginTop: '16px'
              }}>
                {error}
              </p>
            </div>
          </Container>
        </Section>
      </main>
    );
  }

  if (!scorecard) {
    return null;
  }

  // Group results by category
  const categories = Array.from(new Set(results.map(r => r.category)));
  
  return (
    <main>
      {/* Hero Section */}
      <Section variant="canvas" className="py-16">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div
              className="inline-flex items-center gap-3 px-4 py-2 mb-6"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                borderRadius: 'var(--radius)',
                fontSize: 'var(--text-small)',
                fontFamily: 'Lexend, sans-serif',
                fontWeight: 'var(--font-weight-medium)'
              }}
            >
              <Zap size={16} />
              Real-Time Performance Testing
            </div>

            <Heading level={1} className="mb-4">
              Compliance Scorecard
            </Heading>
            
            <p style={{
              fontSize: 'var(--text-lead)',
              fontFamily: 'Lexend, sans-serif',
              color: 'var(--muted-foreground)',
              lineHeight: 'var(--line-height-relaxed)',
              maxWidth: '42rem',
              margin: '0 auto'
            }}>
              Comprehensive validation of fluid typography, semantic HTML, modern font weights, 
              and design system compliance
            </p>
          </div>
        </Container>
      </Section>

      {/* Overall Score */}
      <Section variant="canvas" className="py-12">
        <Container>
          <div 
            className="p-12"
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border-soft)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{
              fontSize: 'clamp(64px, 10vw, 96px)',  /* Fluid score number */
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 'var(--font-weight-bold)',
              color: getGradeColor(scorecard.overall),
              lineHeight: '1',
              marginBottom: '16px'
            }}>
              {scorecard.overall.toFixed(0)}%
            </div>
            
            <div style={{
              fontSize: 'var(--text-h3)',
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 'var(--font-weight-medium)',
              color: getGradeColor(scorecard.overall),
              marginBottom: '8px'
            }}>
              {getGradeLabel(scorecard.overall)}
            </div>
            
            <p style={{
              fontSize: 'var(--text-base)',
              fontFamily: 'Manrope, sans-serif',
              color: 'var(--muted-foreground)'
            }}>
              Overall Compliance Score
            </p>
          </div>
        </Container>
      </Section>

      {/* Category Scores */}
      <Section variant="canvas" className="py-12">
        <Container>
          <Heading level={2} className="mb-8">
            Category Scores
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fluid Typography */}
            <ScoreCard
              title="Fluid Typography"
              score={scorecard.fluidTypography}
              icon={<TrendingUp size={24} />}
              description="Responsive type scaling with clamp()"
            />

            {/* Fluid Spacing */}
            <ScoreCard
              title="Fluid Spacing"
              score={scorecard.fluidSpacing}
              icon={<TrendingUp size={24} />}
              description="Consistent spacing with Tailwind"
            />

            {/* Semantic HTML */}
            <ScoreCard
              title="Semantic HTML"
              score={scorecard.semanticHTML}
              icon={<Check size={24} />}
              description="Proper landmarks and hierarchy"
            />

            {/* Font Weights */}
            <ScoreCard
              title="Font Weights"
              score={scorecard.fontWeights}
              icon={<Check size={24} />}
              description="Modern weights (400, 500, 600)"
            />

            {/* CSS Variables */}
            <ScoreCard
              title="CSS Variables"
              score={scorecard.cssVariables}
              icon={<Check size={24} />}
              description="Design system compliance"
            />

            {/* Core Web Vitals */}
            <ScoreCard
              title="Core Web Vitals"
              score={scorecard.coreWebVitals}
              icon={<Zap size={24} />}
              description="Performance metrics"
            />
          </div>
        </Container>
      </Section>

      {/* Detailed Results */}
      <Section variant="muted" className="py-12">
        <Container>
          <Heading level={2} className="mb-8">
            Detailed Test Results
          </Heading>

          <div className="grid grid-cols-1 gap-6">
            {categories.map(category => {
              const categoryResults = results.filter(r => r.category === category);
              const passedCount = categoryResults.filter(r => r.passed).length;
              const totalCount = categoryResults.length;

              return (
                <div 
                  key={category}
                  className="p-8"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px'
                  }}>
                    <Heading level={3}>
                      {category}
                    </Heading>
                    
                    <div style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: passedCount === totalCount ? 'var(--primary)' : 'var(--muted-foreground)'
                    }}>
                      {passedCount}/{totalCount} passed
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {categoryResults.map((result, index) => (
                      <TestResult key={index} result={result} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Run Tests Again */}
      <Section variant="canvas" className="py-12">
        <Container>
          <div className="text-center">
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: '12px 32px',
                borderRadius: 'var(--radius)',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 200ms ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              Run Tests Again
            </button>
            
            <p style={{
              fontSize: 'var(--text-small)',
              fontFamily: 'Manrope, sans-serif',
              color: 'var(--muted-foreground)',
              marginTop: '16px'
            }}>
              Tests run automatically on page load
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}

// Score Card Component
function ScoreCard({ title, score, icon, description }: {
  title: string;
  score: number;
  icon: React.ReactNode;
  description: string;
}) {
  const getGradeColor = (score: number) => {
    if (score >= 90) return 'var(--primary)';
    if (score >= 80) return 'var(--accent)';
    if (score >= 70) return 'var(--muted-foreground)';
    return 'var(--destructive)';
  };

  const getGradeLabel = (score: number) => {
    if (score >= 95) return 'A+';
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  return (
    <div 
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 200ms ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '16px'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: 'var(--muted)',
          borderRadius: 'var(--radius)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: getGradeColor(score)
        }}>
          {icon}
        </div>
        
        <div>
          <div style={{
            fontSize: 'var(--text-h4)',
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--foreground)'
          }}>
            {title}
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '8px',
        marginBottom: '8px'
      }}>
        <div style={{
          fontSize: 'var(--text-h2)',  /* Use CSS variable for card score numbers */
          fontFamily: 'Lexend, sans-serif',
          fontWeight: 'var(--font-weight-semibold)',
          color: getGradeColor(score),
          lineHeight: '1'
        }}>
          {score.toFixed(0)}%
        </div>
        
        <div style={{
          fontSize: 'var(--text-lg)',
          fontFamily: 'Lexend, sans-serif',
          fontWeight: 'var(--font-weight-medium)',
          color: getGradeColor(score)
        }}>
          {getGradeLabel(score)}
        </div>
      </div>

      <p style={{
        fontSize: 'var(--text-small)',
        fontFamily: 'Manrope, sans-serif',
        color: 'var(--muted-foreground)',
        lineHeight: 'var(--line-height-normal)'
      }}>
        {description}
      </p>
    </div>
  );
}

// Test Result Component
function TestResult({ result }: { result: PerformanceTestResult }) {
  return (
    <div 
      style={{
        display: 'flex',
        gap: '16px',
        padding: '16px',
        backgroundColor: result.passed ? 'var(--background)' : 'rgba(var(--destructive-rgb), 0.05)',
        border: `1px solid ${result.passed ? 'var(--border-extra-soft)' : 'var(--border-soft)'}`,
        borderRadius: 'var(--radius)',
      }}
    >
      <div style={{
        flexShrink: 0,
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: result.passed ? 'var(--primary)' : 'var(--destructive)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: result.passed ? 'var(--primary-foreground)' : 'var(--destructive-foreground)'
      }}>
        {result.passed ? <Check size={14} /> : <X size={14} />}
      </div>

      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: 'var(--text-base)',
          fontFamily: 'Lexend, sans-serif',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--foreground)',
          marginBottom: '4px'
        }}>
          {result.test}
        </div>

        <div style={{
          fontSize: 'var(--text-small)',
          fontFamily: 'Manrope, sans-serif',
          color: 'var(--muted-foreground)',
          marginBottom: result.recommendation ? '8px' : '0'
        }}>
          {result.details}
        </div>

        {result.recommendation && (
          <div 
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              padding: '8px 12px',
              backgroundColor: 'var(--muted)',
              borderRadius: 'var(--radius)',
              fontSize: 'var(--text-small)',
              fontFamily: 'Manrope, sans-serif',
              color: 'var(--muted-foreground)'
            }}
          >
            <AlertTriangle size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
            <span>{result.recommendation}</span>
          </div>
        )}
      </div>
    </div>
  );
}