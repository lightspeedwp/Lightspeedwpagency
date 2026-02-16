/**
 * Author Archive Template
 * 
 * WordPress template: templates/archive-author.html
 * 100% CSS variables — no Tailwind.
 * BEM naming: .author-*
 * 
 * @see /src/styles/templates/author-archive.css
 * @see /src/styles/templates/archive.css
 */

import { Container } from '../common/Container';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { PaginationNav } from '../patterns/PaginationNav';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { SocialProof } from '../patterns/SocialProof';
import { Badge } from '../patterns/Badge';
import { Section } from '../common/Section';
import { Calendar, User, Clock, MapPin, Twitter, Linkedin, Globe } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { clientLogos } from '../../data/logos';
import '@/styles/templates/archive.css';
import '@/styles/templates/author-archive.css';