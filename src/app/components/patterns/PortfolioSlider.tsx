/**
 * Portfolio Slider Pattern
 */

import React from 'react';
import Slider from 'react-slick';
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight, ArrowSquareOut as ExternalLink } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { portfolioProjects } from '../../data/portfolio-projects';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { getPageUrl } from '../../data/site-pages';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/patterns/portfolio-slider.css';

interface PortfolioSliderProps {
  title?: string;
  description?: string;
  count?: number;
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button 
      className="portfolio-slider__arrow portfolio-slider__arrow--next" 
      onClick={onClick}
      aria-label="Next Slide"
    >
      <ChevronRight size={24} />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button 
      className="portfolio-slider__arrow portfolio-slider__arrow--prev" 
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <ChevronLeft size={24} />
    </button>
  );
};

export const PortfolioSlider: React.FC<PortfolioSliderProps> = ({
  title = "Our Latest Work",
  description = "Explore our recent projects and see how we've helped businesses transform their digital presence.",
  count = 6
}) => {
  // Filter and sort projects (featured first, then by date)
  const projects = portfolioProjects
    .sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1))
    .slice(0, count);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="portfolio-slider">
      <div className="portfolio-slider__container">
        {/* Header */}
        <div className="portfolio-slider__header">
          <h2 className="portfolio-slider__title">
            Our <span className="portfolio-slider__highlight">Latest Work</span>
          </h2>
          <p className="portfolio-slider__description">
            {description}
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="portfolio-slider__slide-wrapper">
              <Link 
                className="portfolio-slider__card"
                to={`/work/${project.slug}`}
              >
                {/* Image */}
                <div className="portfolio-slider__image-container">
                  <ImageWithFallback
                    src={project.featuredImage}
                    alt={project.title}
                    className="portfolio-slider__image"
                  />
                  <div className="portfolio-slider__overlay" />
                </div>

                {/* Content */}
                <div className="portfolio-slider__content">
                  <span className="portfolio-slider__client">
                    {project.client}
                  </span>
                  
                  <h3 className="portfolio-slider__card-title">
                    {project.title}
                  </h3>
                  
                  <p className="portfolio-slider__excerpt">
                    {project.excerpt}
                  </p>

                  <div className="portfolio-slider__tags">
                    {project.projectTags.slice(0, 3).map(tag => (
                      <span key={tag} className="portfolio-slider__tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};