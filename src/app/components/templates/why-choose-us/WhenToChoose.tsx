/**
 * When To Choose — Why Choose Us sub-component
 *
 * WordPress pattern: lsx-design/content/when-to-choose
 * BEM block: .wcu-choose
 *
 * Four-column comparison cards showing when to pick
 * LSX Design vs alternatives.
 *
 * @see /src/styles/templates/why-choose-us/wcu-choose.css
 * @see /src/app/data/why-choose-us.ts
 */

import { Crown, Wrench, UserCircle, Buildings } from '@phosphor-icons/react';
import { whenToChoose } from '../../../data/why-choose-us';
import type { UniversalIcon } from '../../../utils/icon-map';

interface OptionCardProps {
  title: string;
  points: string[];
  icon: UniversalIcon;
  isHighlighted?: boolean;
}

function OptionCard({ title, points, icon: Icon, isHighlighted }: OptionCardProps) {
  return (
    <article
      className={`wcu-choose__card${isHighlighted ? ' wcu-choose__card--highlight' : ''}`}
    >
      <div className="wcu-choose__card-header">
        <Icon size={24} weight="duotone" />
        <h3 className="wcu-choose__card-title">{title}</h3>
      </div>
      <ul className="wcu-choose__list" role="list">
        {points.map((point, i) => (
          <li key={i} className="wcu-choose__list-item">{point}</li>
        ))}
      </ul>
    </article>
  );
}

export function WhenToChoose() {
  return (
    <div className="wcu-choose__grid">
      <OptionCard
        title={whenToChoose.lsxDesign.title}
        points={whenToChoose.lsxDesign.points}
        icon={Crown}
        isHighlighted
      />
      <OptionCard
        title={whenToChoose.diyBuilder.title}
        points={whenToChoose.diyBuilder.points}
        icon={Wrench}
      />
      <OptionCard
        title={whenToChoose.freelancer.title}
        points={whenToChoose.freelancer.points}
        icon={UserCircle}
      />
      <OptionCard
        title={whenToChoose.largeAgency.title}
        points={whenToChoose.largeAgency.points}
        icon={Buildings}
      />
    </div>
  );
}
