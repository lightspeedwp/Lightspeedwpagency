/**
 * Compliance Scorecard Block Component
 * 
 * WordPress Block: dev-tools/compliance-scorecard
 * 
 * Real-time testing and validation of design system compliance.
 * 
 * @see /src/app/utils/icon-map.ts
 * @see /src/styles/blocks/dev-tools/compliance-scorecard.css
 */

import { useEffect, useState } from 'react';
import { Container } from '../../common/Container';
import { Section } from '../../common/Section';
import { Heading } from '../../common/Heading';
import { CheckCircle, WarningCircle, XCircle, Lightning, ArrowLeft, X, TrendUp, Check, Warning as AlertTriangle } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { slugToPath } from '../../../utils/route-map';
import { DesignSystemPerformanceTester, type ComplianceScorecard as ComplianceScorecardType, type PerformanceTestResult } from '../../../utils/performanceTester';

export function ComplianceScorecard() {
  const [scorecard, setScorecard] = useState<ComplianceScorecardType | null>(null);
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
      <main className="wp-block-devtools-compliance-scorecard">
        <Section background="default" className="wp-py-24">
          <Container>
            <Link 
              to={slugToPath('dev-tools')}
              className="wp-block-devtools-compliance-scorecard__back-button"
            >
              <ArrowLeft size={16} />
              Back to Dev Tools
            </Link>
            <div className="wp-block-devtools-compliance-scorecard__loading">
              <div className="wp-block-devtools-compliance-scorecard__spinner" />
              <Heading level={2}>Running Compliance Tests...</Heading>
              <p className="wp-block-devtools-compliance-scorecard__loading-text">
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
      <main className="wp-block-devtools-compliance-scorecard">
        <Section background="default" className="wp-py-24">
          <Container>
            <Link 
              to={slugToPath('dev-tools')}
              className="wp-block-devtools-compliance-scorecard__back-button"
            >
              <ArrowLeft size={16} />
              Back to Dev Tools
            </Link>
            <div className="wp-block-devtools-compliance-scorecard__loading">
              <div className="wp-block-devtools-compliance-scorecard__error-icon">
                <X size={32} />
              </div>
              <Heading level={2}>Test Error</Heading>
              <p className="wp-block-devtools-compliance-scorecard__error-text">
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
    <main className="wp-block-devtools-compliance-scorecard">
      {/* Hero Section */}
      <Section background="default" className="wp-py-16">
        <Container>
          <Link 
            to={slugToPath('dev-tools')}
            className="wp-block-devtools-compliance-scorecard__back-button"
          >
            <ArrowLeft size={16} />
            Back to Dev Tools
          </Link>
          <div className="wp-block-devtools-compliance-scorecard__header">
            <div className="wp-block-devtools-compliance-scorecard__badge">
              <Lightning size={16} />
              Real-Time Performance Testing
            </div>

            <Heading level={1} className="wp-mb-4">
              Compliance Scorecard
            </Heading>
            
            <p className="wp-block-devtools-compliance-scorecard__description">
              Comprehensive validation of fluid typography, semantic HTML, modern font weights, 
              and design system compliance
            </p>
          </div>
        </Container>
      </Section>

      {/* Overall Score */}
      <Section background="default" className="wp-py-12">
        <Container>
          <div 
            className="wp-block-devtools-compliance-scorecard__score-card"
            style={{ borderColor: getGradeColor(scorecard.overall) }}
          >
            <div 
              className="wp-block-devtools-compliance-scorecard__overall-score"
              style={{ color: getGradeColor(scorecard.overall) }}
            >
              {scorecard.overall.toFixed(0)}%
            </div>
            
            <div 
              className="wp-block-devtools-compliance-scorecard__grade"
              style={{ color: getGradeColor(scorecard.overall) }}
            >
              {getGradeLabel(scorecard.overall)}
            </div>
            
            <p className="wp-block-devtools-compliance-scorecard__label">
              Overall Compliance Score
            </p>
          </div>
        </Container>
      </Section>

      {/* Category Scores */}
      <Section background="default" className="wp-py-12">
        <Container>
          <Heading level={2} className="wp-mb-8">
            Category Scores
          </Heading>

          <div className="wp-grid-3-cols">
            <ScoreCard
              title="Fluid Typography"
              score={scorecard.fluidTypography}
              icon={<TrendUp size={24} />}
              description="Responsive type scaling with clamp()"
            />
            <ScoreCard
              title="Fluid Spacing"
              score={scorecard.fluidSpacing}
              icon={<TrendUp size={24} />}
              description="Consistent spacing with Tailwind"
            />
            <ScoreCard
              title="Semantic HTML"
              score={scorecard.semanticHTML}
              icon={<Check size={24} />}
              description="Proper landmarks and hierarchy"
            />
            <ScoreCard
              title="Font Weights"
              score={scorecard.fontWeights}
              icon={<Check size={24} />}
              description="Modern weights (400, 500, 600)"
            />
            <ScoreCard
              title="CSS Variables"
              score={scorecard.cssVariables}
              icon={<Check size={24} />}
              description="Design system compliance"
            />
            <ScoreCard
              title="Core Web Vitals"
              score={scorecard.coreWebVitals}
              icon={<Lightning size={24} />}
              description="Performance metrics"
            />
          </div>
        </Container>
      </Section>

      {/* Detailed Results */}
      <Section background="muted" className="wp-py-12">
        <Container>
          <Heading level={2} className="wp-mb-8">
            Detailed Test Results
          </Heading>

          <div className="wp-grid-1-col" style={{ gap: 'var(--spacing-6)' }}>
            {categories.map(category => {
              const categoryResults = results.filter(r => r.category === category);
              const passedCount = categoryResults.filter(r => r.passed).length;
              const totalCount = categoryResults.length;

              return (
                <div 
                  key={category}
                  className="wp-block-devtools-compliance-scorecard__results-card"
                >
                  <div className="wp-block-devtools-compliance-scorecard__results-header">
                    <Heading level={3}>
                      {category}
                    </Heading>
                    
                    <div 
                      className="wp-block-devtools-compliance-scorecard__results-count"
                      style={{
                        color: passedCount === totalCount ? 'var(--primary)' : 'var(--muted-foreground)'
                      }}
                    >
                      {passedCount}/{totalCount} passed
                    </div>
                  </div>

                  <div className="wp-grid-1-col" style={{ gap: 'var(--spacing-4)' }}>
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
      <Section background="default" className="wp-py-12">
        <Container>
          <div className="wp-block-devtools-compliance-scorecard__actions">
            <button
              onClick={() => window.location.reload()}
              className="wp-block-devtools-compliance-scorecard__run-button"
            >
              Run Tests Again
            </button>
            
            <p className="wp-block-devtools-compliance-scorecard__run-note">
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
    <div className="wp-block-devtools-compliance-scorecard__category-card">
      <div className="wp-block-devtools-compliance-scorecard__category-header">
        <div 
          className="wp-block-devtools-compliance-scorecard__category-icon"
          style={{ color: getGradeColor(score) }}
        >
          {icon}
        </div>
        
        <div>
          <div className="wp-block-devtools-compliance-scorecard__category-title">
            {title}
          </div>
        </div>
      </div>

      <div className="wp-block-devtools-compliance-scorecard__category-score-wrapper">
        <div 
          className="wp-block-devtools-compliance-scorecard__category-score"
          style={{ color: getGradeColor(score) }}
        >
          {score.toFixed(0)}%
        </div>
        
        <div 
          className="wp-block-devtools-compliance-scorecard__category-grade"
          style={{ color: getGradeColor(score) }}
        >
          {getGradeLabel(score)}
        </div>
      </div>

      <p className="wp-block-devtools-compliance-scorecard__category-desc">
        {description}
      </p>
    </div>
  );
}

// Test Result Component
function TestResult({ result }: { result: PerformanceTestResult }) {
  return (
    <div 
      className="wp-block-devtools-compliance-scorecard__result-item"
      style={{
        backgroundColor: result.passed ? 'var(--background)' : 'color-mix(in srgb, var(--destructive) 5%, transparent)',
        borderColor: result.passed ? 'var(--border-extra-soft)' : 'var(--border-soft)',
      }}
    >
      <div 
        className="wp-block-devtools-compliance-scorecard__result-icon"
        style={{
          backgroundColor: result.passed ? 'var(--primary)' : 'var(--destructive)',
          color: result.passed ? 'var(--primary-foreground)' : 'var(--destructive-foreground)'
        }}
      >
        {result.passed ? <Check size={14} /> : <X size={14} />}
      </div>

      <div style={{ flex: 1 }}>
        <div className="wp-block-devtools-compliance-scorecard__result-title">
          {result.test}
        </div>

        <div 
          className="wp-block-devtools-compliance-scorecard__result-details"
          style={{
            marginBottom: result.recommendation ? '8px' : '0'
          }}
        >
          {result.details}
        </div>

        {result.recommendation && (
          <div className="wp-block-devtools-compliance-scorecard__recommendation">
            <AlertTriangle size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
            <span>{result.recommendation}</span>
          </div>
        )}
      </div>
    </div>
  );
}