import type { Meta, StoryObj } from '@storybook/react';
import { WeatherWidget } from './WeatherWidget';

/**
 * Weather Widget - Live Weather Display
 * 
 * Real-time weather data with location detection and forecasts.
 * Perfect for travel and tourism websites.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors
 * - Uses Lexend for temperatures, Manrope for labels
 * - WCAG 2.1 AA compliant
 * - Responsive layouts
 * 
 * ## API Integration
 * - OpenWeatherMap API
 * - WeatherAPI.com
 * - Auto-refresh every 30 minutes
 * - Geolocation support
 * 
 * ## Use Cases
 * - Travel website homepages
 * - Destination pages
 * - Safari/tour booking sites
 * - Event websites
 */
const meta = {
  title: 'Content Enhancements/WeatherWidget',
  component: WeatherWidget,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Weather widget with current conditions and forecast. Supports Celsius/Fahrenheit and multiple locations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    unit: {
      control: 'select',
      options: ['celsius', 'fahrenheit'],
      description: 'Temperature unit',
    },
    variant: {
      control: 'select',
      options: ['compact', 'default', 'detailed'],
      description: 'Display variant',
    },
    forecastDays: {
      control: 'select',
      options: [3, 5, 7],
      description: 'Number of forecast days',
    },
  },
} satisfies Meta<typeof WeatherWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Weather Widget
 */
export const Default: Story = {
  args: {
    useMockData: true,
    location: 'Cape Town, South Africa',
    unit: 'celsius',
    showForecast: true,
    forecastDays: 5,
    variant: 'default',
    showMetrics: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default weather widget with current conditions, metrics, and 5-day forecast.',
      },
    },
  },
};

/**
 * Compact Variant
 */
export const Compact: Story = {
  args: {
    useMockData: true,
    location: 'Cape Town, South Africa',
    unit: 'celsius',
    variant: 'compact',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact widget showing only temperature and location. Perfect for sidebars.',
      },
    },
  },
};

/**
 * Fahrenheit Units
 */
export const Fahrenheit: Story = {
  args: {
    useMockData: true,
    location: 'New York, USA',
    unit: 'fahrenheit',
    showForecast: true,
    forecastDays: 5,
    variant: 'default',
    showMetrics: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Weather widget displaying temperatures in Fahrenheit.',
      },
    },
  },
};

/**
 * Without Forecast
 */
export const WithoutForecast: Story = {
  args: {
    useMockData: true,
    location: 'London, UK',
    unit: 'celsius',
    showForecast: false,
    variant: 'default',
    showMetrics: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Current weather only without forecast. More compact design.',
      },
    },
  },
};

/**
 * Without Metrics
 */
export const WithoutMetrics: Story = {
  args: {
    useMockData: true,
    location: 'Paris, France',
    unit: 'celsius',
    showForecast: true,
    forecastDays: 5,
    variant: 'default',
    showMetrics: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Weather widget without humidity, wind, visibility, and pressure metrics.',
      },
    },
  },
};

/**
 * 3-Day Forecast
 */
export const ThreeDayForecast: Story = {
  args: {
    useMockData: true,
    location: 'Tokyo, Japan',
    unit: 'celsius',
    showForecast: true,
    forecastDays: 3,
    variant: 'default',
    showMetrics: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Weather widget with 3-day forecast. Good for mobile or limited space.',
      },
    },
  },
};

/**
 * 7-Day Forecast
 */
export const SevenDayForecast: Story = {
  args: {
    useMockData: true,
    location: 'Sydney, Australia',
    unit: 'celsius',
    showForecast: true,
    forecastDays: 7,
    variant: 'default',
    showMetrics: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Extended 7-day forecast. Perfect for travel planning.',
      },
    },
  },
};

/**
 * Safari Booking Page
 */
export const SafariBooking: Story = {
  render: () => (
    <div style={{ padding: '4rem 1.5rem', backgroundColor: 'var(--background)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Destination Info */}
          <div className="lg:col-span-2">
            <h1
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h1)',
                fontWeight: '700',
                color: 'var(--foreground)',
                marginBottom: '1rem',
              }}
            >
              Kruger National Park Safari
            </h1>
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.6',
                marginBottom: '2rem',
              }}
            >
              Experience the Big Five in one of Africa's largest game reserves. Our expert guides
              will take you on an unforgettable journey through pristine wilderness.
            </p>

            <div
              className="p-6 rounded mb-6"
              style={{
                backgroundColor: 'var(--muted)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h4)',
                  fontWeight: '600',
                  color: 'var(--foreground)',
                  marginBottom: '0.5rem',
                }}
              >
                Best Time to Visit
              </h3>
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                }}
              >
                May to September offers the best game viewing with dry weather and excellent
                visibility.
              </p>
            </div>
          </div>

          {/* Weather Widget */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h4)',
                fontWeight: '600',
                color: 'var(--foreground)',
              }}
            >
              Current Weather
            </h3>
            <WeatherWidget
              useMockData
              location="Kruger National Park"
              unit="celsius"
              showForecast
              forecastDays={5}
              variant="default"
              showMetrics
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Weather widget integrated into a safari booking page. Shows destination weather for planning.',
      },
    },
  },
};

/**
 * Homepage Widget
 */
export const Homepage: Story = {
  render: () => (
    <div style={{ padding: '2rem 1.5rem' }}>
      <div style={{ maxWidth: '400px' }}>
        <h3
          className="mb-4"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h4)',
            fontWeight: '600',
            color: 'var(--foreground)',
          }}
        >
          Weather in Cape Town
        </h3>
        <WeatherWidget
          useMockData
          location="Cape Town, South Africa"
          unit="celsius"
          showForecast
          forecastDays={5}
          variant="default"
          showMetrics
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Weather widget for homepage. Displays local weather conditions.',
      },
    },
  },
};

/**
 * Sidebar Widget
 */
export const Sidebar: Story = {
  render: () => (
    <div style={{ maxWidth: '350px' }}>
      <div
        style={{
          padding: '1.5rem',
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
        }}
      >
        <h4
          className="mb-4"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h5)',
            fontWeight: '600',
            color: 'var(--foreground)',
          }}
        >
          Local Weather
        </h4>
        <WeatherWidget
          useMockData
          location="Cape Town"
          unit="celsius"
          showForecast
          forecastDays={3}
          variant="default"
          showMetrics={false}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact weather widget for sidebar. 3-day forecast without extra metrics.',
      },
    },
  },
};

/**
 * Footer Widget
 */
export const Footer: Story = {
  render: () => (
    <div
      style={{
        padding: '3rem 1.5rem',
        backgroundColor: 'var(--muted)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Column 1 */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h5)',
                fontWeight: '600',
                color: 'var(--foreground)',
              }}
            >
              About Us
            </h4>
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--muted-foreground)',
              }}
            >
              Leading safari tour operator in South Africa since 1995.
            </p>
          </div>

          {/* Footer Column 2 */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h5)',
                fontWeight: '600',
                color: 'var(--foreground)',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li className="mb-2">
                <a
                  href="#"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                    textDecoration: 'none',
                  }}
                >
                  Safari Packages
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                    textDecoration: 'none',
                  }}
                >
                  Destinations
                </a>
              </li>
            </ul>
          </div>

          {/* Weather Widget */}
          <div>
            <WeatherWidget
              useMockData
              location="Cape Town"
              unit="celsius"
              variant="compact"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Compact weather widget in footer. Shows current temperature and location only.',
      },
    },
  },
};

/**
 * Loading State
 */
export const LoadingState: Story = {
  render: () => {
    const [key, setKey] = React.useState(0);

    return (
      <div>
        <button
          onClick={() => setKey((k) => k + 1)}
          style={{
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            border: 'none',
            borderRadius: 'var(--radius)',
            fontFamily: 'Lexend, sans-serif',
            cursor: 'pointer',
          }}
        >
          Reload Weather
        </button>

        <WeatherWidget key={key} useMockData location="Cape Town" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates loading state. Click "Reload Weather" to see the loader.',
      },
    },
  },
};

/**
 * Theme Comparison
 */
export const ThemeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h4)',
            marginBottom: '1rem',
            color: 'var(--foreground)',
          }}
        >
          Current Theme
        </h3>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            marginBottom: '1rem',
            color: 'var(--muted-foreground)',
          }}
        >
          Toggle theme using the toolbar above to see automatic color adaptation.
        </p>
        <WeatherWidget
          useMockData
          location="Cape Town, South Africa"
          showForecast
          forecastDays={5}
        />
      </div>

      <div style={{ padding: '1.5rem' }}>
        <h4
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h5)',
            marginBottom: '0.5rem',
            color: 'var(--foreground)',
          }}
        >
          CSS Variables Used:
        </h4>
        <ul
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
            listStyle: 'disc',
            paddingLeft: '1.5rem',
          }}
        >
          <li>
            <code>--card</code> - Widget background
          </li>
          <li>
            <code>--foreground</code> - Text color
          </li>
          <li>
            <code>--primary</code> - Weather icons
          </li>
          <li>
            <code>--muted</code> - Forecast day backgrounds
          </li>
          <li>
            <code>--muted-foreground</code> - Labels and secondary text
          </li>
          <li>
            <code>--border</code> - Section dividers
          </li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates automatic theme adaptation. All colors use CSS variables.',
      },
    },
  },
};

/**
 * API Integration Example
 */
export const APIIntegration: Story = {
  render: () => (
    <div>
      <div
        style={{
          padding: '1rem',
          marginBottom: '1.5rem',
          backgroundColor: 'var(--muted)',
          borderRadius: 'var(--radius)',
        }}
      >
        <h4
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h5)',
            marginBottom: '0.5rem',
            color: 'var(--foreground)',
          }}
        >
          How to Use Real Weather API:
        </h4>
        <ol
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
            paddingLeft: '1.5rem',
          }}
        >
          <li>Sign up for OpenWeatherMap API at openweathermap.org</li>
          <li>Get your free API key</li>
          <li>Store key in environment variable</li>
          <li>Pass key to WeatherWidget component</li>
        </ol>

        <pre
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: 'var(--background)',
            borderRadius: 'var(--radius)',
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: 'var(--text-small)',
            color: 'var(--foreground)',
          }}
        >
          {`<WeatherWidget
  apiKey={process.env.REACT_APP_WEATHER_API_KEY}
  location="Cape Town, South Africa"
  unit="celsius"
  showForecast
  forecastDays={5}
/>`}
        </pre>
      </div>

      <WeatherWidget useMockData location="Cape Town, South Africa" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how to integrate with real OpenWeatherMap API. Includes setup instructions.',
      },
    },
  },
};
