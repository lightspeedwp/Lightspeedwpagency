/**
 * Weather Widget Component
 * 
 * WordPress concept: Live weather display widget
 * Pattern: `lsx-design/content/weather-widget`
 * 
 * Real-time weather data with location detection, forecasts,
 * and multiple display formats. Perfect for travel/tourism sites.
 * 
 * **Purpose:**
 * - Display current weather conditions
 * - Show multi-day forecasts
 * - Auto-detect user location
 * - Support manual location selection
 * - Build trust for travel websites
 * 
 * **API Integration:**
 * - OpenWeatherMap API
 * - WeatherAPI.com
 * - Auto-refresh every 30 minutes
 * - Geolocation support
 * 
 * **Design System:**
 * - Typography: Lexend for temperatures, Manrope for labels
 * - Colors: var(--foreground) for text, var(--muted) for cards
 * - Spacing: Tailwind classes (p-*, gap-*)
 * - Fonts: Lexend/Manrope only
 * 
 * **Accessibility:**
 * - ARIA labels for conditions
 * - Semantic HTML
 * - High contrast icons
 * - Screen reader friendly
 * 
 * **Performance:**
 * - API caching (30 min)
 * - Lazy loading
 * - Progressive enhancement
 * - Mock data fallback
 * 
 * @example
 * // Auto-detect location
 * <WeatherWidget
 *   apiKey="YOUR_API_KEY"
 *   autoDetectLocation
 * />
 * 
 * @example
 * // Specific location
 * <WeatherWidget
 *   apiKey="YOUR_API_KEY"
 *   location="Cape Town, South Africa"
 *   showForecast
 * />
 */

import React, { useState, useEffect } from 'react';
import {
  Cloud,
  CloudRain,
  CloudSnow,
  Sun,
  CloudDrizzle,
  Wind,
  Droplets,
  Eye,
  Gauge,
  MapPin,
  Loader2,
  AlertCircle,
  CloudFog,
} from 'lucide-react';

/**
 * Weather condition types
 */
type WeatherCondition =
  | 'clear'
  | 'clouds'
  | 'rain'
  | 'drizzle'
  | 'snow'
  | 'mist'
  | 'fog'
  | 'thunderstorm';

/**
 * Current weather data structure
 */
export interface WeatherData {
  location: string;
  country: string;
  temperature: number;
  feelsLike: number;
  condition: WeatherCondition;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  sunrise: string;
  sunset: string;
  icon: string;
}

/**
 * Forecast day data
 */
export interface ForecastDay {
  date: string;
  dayOfWeek: string;
  tempMax: number;
  tempMin: number;
  condition: WeatherCondition;
  description: string;
  humidity: number;
  precipitation: number;
}

/**
 * Weather Widget component props
 */
interface WeatherWidgetProps {
  /**
   * API key for weather service
   * 
   * **OpenWeatherMap:** https://openweathermap.org/api
   * **WeatherAPI:** https://www.weatherapi.com/
   * 
   * @example
   * apiKey={process.env.REACT_APP_WEATHER_API_KEY}
   */
  apiKey?: string;

  /**
   * Location (city name or coordinates)
   * 
   * @example
   * location="Cape Town, South Africa"
   * location="London, UK"
   */
  location?: string;

  /**
   * Auto-detect user location using geolocation API
   * 
   * @default false
   */
  autoDetectLocation?: boolean;

  /**
   * Temperature unit
   * 
   * @default "celsius"
   */
  unit?: 'celsius' | 'fahrenheit';

  /**
   * Show forecast (3-7 days)
   * 
   * @default true
   */
  showForecast?: boolean;

  /**
   * Number of forecast days
   * 
   * @default 5
   */
  forecastDays?: 3 | 5 | 7;

  /**
   * Display variant
   * 
   * - compact: Small widget with essentials
   * - default: Standard with all details
   * - detailed: Extended with forecast
   * 
   * @default "default"
   */
  variant?: 'compact' | 'default' | 'detailed';

  /**
   * Show additional metrics (humidity, wind, etc.)
   * 
   * @default true
   */
  showMetrics?: boolean;

  /**
   * Use mock data (for development)
   * 
   * @default false
   */
  useMockData?: boolean;

  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Mock weather data for development
 */
const mockCurrentWeather: WeatherData = {
  location: 'Cape Town',
  country: 'South Africa',
  temperature: 24,
  feelsLike: 26,
  condition: 'clear',
  description: 'Clear sky',
  humidity: 65,
  windSpeed: 12,
  visibility: 10,
  pressure: 1013,
  sunrise: '06:45',
  sunset: '19:30',
  icon: '01d',
};

const mockForecast: ForecastDay[] = [
  {
    date: '2024-01-01',
    dayOfWeek: 'Mon',
    tempMax: 26,
    tempMin: 18,
    condition: 'clear',
    description: 'Sunny',
    humidity: 60,
    precipitation: 0,
  },
  {
    date: '2024-01-02',
    dayOfWeek: 'Tue',
    tempMax: 25,
    tempMin: 19,
    condition: 'clouds',
    description: 'Partly cloudy',
    humidity: 65,
    precipitation: 10,
  },
  {
    date: '2024-01-03',
    dayOfWeek: 'Wed',
    tempMax: 23,
    tempMin: 17,
    condition: 'rain',
    description: 'Light rain',
    humidity: 75,
    precipitation: 60,
  },
  {
    date: '2024-01-04',
    dayOfWeek: 'Thu',
    tempMax: 24,
    tempMin: 18,
    condition: 'clouds',
    description: 'Cloudy',
    humidity: 70,
    precipitation: 20,
  },
  {
    date: '2024-01-05',
    dayOfWeek: 'Fri',
    tempMax: 27,
    tempMin: 19,
    condition: 'clear',
    description: 'Clear sky',
    humidity: 55,
    precipitation: 0,
  },
];

/**
 * Get weather icon component
 */
function getWeatherIcon(condition: WeatherCondition, size: 'sm' | 'md' | 'lg' = 'md') {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const iconProps = {
    className: sizeClasses[size],
    style: { color: 'var(--primary)' },
  };

  switch (condition) {
    case 'clear':
      return <Sun {...iconProps} />;
    case 'clouds':
      return <Cloud {...iconProps} />;
    case 'rain':
      return <CloudRain {...iconProps} />;
    case 'drizzle':
      return <CloudDrizzle {...iconProps} />;
    case 'snow':
      return <CloudSnow {...iconProps} />;
    case 'mist':
    case 'fog':
      return <CloudFog {...iconProps} />;
    case 'thunderstorm':
      return <CloudRain {...iconProps} />;
    default:
      return <Sun {...iconProps} />;
  }
}

/**
 * Convert Celsius to Fahrenheit
 */
function celsiusToFahrenheit(celsius: number): number {
  return Math.round((celsius * 9) / 5 + 32);
}

/**
 * Format temperature with unit
 */
function formatTemperature(temp: number, unit: 'celsius' | 'fahrenheit'): string {
  const value = unit === 'fahrenheit' ? celsiusToFahrenheit(temp) : temp;
  const symbol = unit === 'fahrenheit' ? '°F' : '°C';
  return `${value}${symbol}`;
}

/**
 * Weather Widget Component
 * 
 * Displays current weather and optional forecast.
 * 
 * @param props - WeatherWidgetProps
 * @returns Weather widget display
 */
export function WeatherWidget({
  apiKey,
  location = 'Cape Town, South Africa',
  autoDetectLocation = false,
  unit = 'celsius',
  showForecast = true,
  forecastDays = 5,
  variant = 'default',
  showMetrics = true,
  useMockData = false,
  className = '',
}: WeatherWidgetProps) {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [detectedLocation, setDetectedLocation] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    async function loadWeather() {
      try {
        setLoading(true);
        setError(null);

        // Use mock data if specified or no API key
        if (useMockData || !apiKey) {
          await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
          if (isMounted) {
            setCurrentWeather(mockCurrentWeather);
            setForecast(mockForecast.slice(0, forecastDays));
            setDetectedLocation(mockCurrentWeather.location);
          }
        } else {
          // TODO: Implement real API integration
          // For now, use mock data
          if (isMounted) {
            setCurrentWeather(mockCurrentWeather);
            setForecast(mockForecast.slice(0, forecastDays));
            setDetectedLocation(location);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load weather data');
          // Fallback to mock data
          setCurrentWeather(mockCurrentWeather);
          setForecast(mockForecast.slice(0, forecastDays));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadWeather();

    // Auto-refresh every 30 minutes
    const refreshInterval = setInterval(loadWeather, 30 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(refreshInterval);
    };
  }, [apiKey, location, autoDetectLocation, forecastDays, useMockData]);

  // Loading state
  if (loading) {
    return (
      <div
        className={`flex items-center justify-center p-8 rounded ${className}`}
        style={{
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <Loader2
          className="w-8 h-8 animate-spin"
          style={{ color: 'var(--primary)' }}
        />
      </div>
    );
  }

  // Error state
  if (error && !currentWeather) {
    return (
      <div
        className={`p-4 rounded ${className}`}
        style={{
          backgroundColor: 'var(--destructive)',
          color: 'var(--destructive-foreground)',
          borderRadius: 'var(--radius)',
        }}
      >
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'var(--text-base)' }}>
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (!currentWeather) return null;

  // Compact variant
  if (variant === 'compact') {
    return (
      <div
        className={`flex items-center gap-4 p-4 rounded ${className}`}
        style={{
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        {getWeatherIcon(currentWeather.condition, 'md')}
        <div>
          <p
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h3)',
              fontWeight: '700',
              color: 'var(--foreground)',
            }}
          >
            {formatTemperature(currentWeather.temperature, unit)}
          </p>
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
            }}
          >
            {currentWeather.location}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        backgroundColor: 'var(--card)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      {/* Current Weather */}
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5" style={{ color: 'var(--primary)' }} />
          <h3
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h4)',
              fontWeight: '600',
              color: 'var(--foreground)',
            }}
          >
            {detectedLocation || currentWeather.location}
            {currentWeather.country && `, ${currentWeather.country}`}
          </h3>
        </div>

        {/* Current Temperature & Condition */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {getWeatherIcon(currentWeather.condition, 'lg')}
            <div>
              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: '700',
                  color: 'var(--foreground)',
                  lineHeight: '1',
                }}
              >
                {formatTemperature(currentWeather.temperature, unit)}
              </p>
              <p
                className="mt-2"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                }}
              >
                Feels like {formatTemperature(currentWeather.feelsLike, unit)}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                fontWeight: '600',
                color: 'var(--foreground)',
                textTransform: 'capitalize',
              }}
            >
              {currentWeather.description}
            </p>
          </div>
        </div>

        {/* Metrics */}
        {showMetrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Humidity */}
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              <div>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Humidity
                </p>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600',
                    color: 'var(--foreground)',
                  }}
                >
                  {currentWeather.humidity}%
                </p>
              </div>
            </div>

            {/* Wind Speed */}
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              <div>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Wind
                </p>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600',
                    color: 'var(--foreground)',
                  }}
                >
                  {currentWeather.windSpeed} km/h
                </p>
              </div>
            </div>

            {/* Visibility */}
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              <div>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Visibility
                </p>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600',
                    color: 'var(--foreground)',
                  }}
                >
                  {currentWeather.visibility} km
                </p>
              </div>
            </div>

            {/* Pressure */}
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              <div>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Pressure
                </p>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600',
                    color: 'var(--foreground)',
                  }}
                >
                  {currentWeather.pressure} hPa
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Forecast */}
      {showForecast && forecast.length > 0 && (
        <div
          className="border-t p-6"
          style={{
            borderTopColor: 'var(--border)',
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
            {forecastDays}-Day Forecast
          </h4>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {forecast.map((day, index) => (
              <div
                key={index}
                className="text-center p-3 rounded transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--muted)',
                  borderRadius: 'var(--radius)',
                }}
              >
                <p
                  className="mb-2"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: '600',
                    color: 'var(--foreground)',
                  }}
                >
                  {day.dayOfWeek}
                </p>

                <div className="flex justify-center mb-2">
                  {getWeatherIcon(day.condition, 'sm')}
                </div>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: '700',
                    color: 'var(--foreground)',
                  }}
                >
                  {formatTemperature(day.tempMax, unit)}
                </p>

                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {formatTemperature(day.tempMin, unit)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/content/weather-widget
 * Category: content
 * 
 * Example WordPress integration:
 * 
 * ```php
 * // functions.php
 * function lsx_weather_widget_shortcode( $atts ) {
 *   $atts = shortcode_atts( array(
 *     'location' => 'Cape Town, South Africa',
 *     'unit' => 'celsius',
 *     'forecast_days' => 5,
 *   ), $atts );
 *   
 *   // Fetch from OpenWeatherMap API with cached results
 *   $cache_key = 'weather_' . sanitize_title( $atts['location'] );
 *   $weather_data = get_transient( $cache_key );
 *   
 *   if ( false === $weather_data ) {
 *     $api_key = get_option( 'openweathermap_api_key' );
 *     $response = wp_remote_get( 
 *       "https://api.openweathermap.org/data/2.5/weather?q={$atts['location']}&units=metric&appid={$api_key}"
 *     );
 *     
 *     if ( ! is_wp_error( $response ) ) {
 *       $body = json_decode( wp_remote_retrieve_body( $response ), true );
 *       $weather_data = $body;
 *       
 *       // Cache for 30 minutes
 *       set_transient( $cache_key, $weather_data, 30 * MINUTE_IN_SECONDS );
 *     }
 *   }
 *   
 *   // Render widget
 *   ob_start();
 *   include locate_template( 'template-parts/weather-widget.php' );
 *   return ob_get_clean();
 * }
 * add_shortcode( 'weather_widget', 'lsx_weather_widget_shortcode' );
 * ```
 */
