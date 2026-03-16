/**
 * Dev Tools — Roadmap Section
 *
 * Displays project roadmap with progress bar, general tasks, and project tasks.
 * Extracted from DevToolsTemplate for file size compliance.
 *
 * @see DevToolsTemplate.tsx — Parent template
 */

import {
  Crosshair,
  CheckCircle,
  Clock,
  Circle,
} from '@phosphor-icons/react';
import type { RoadmapStatus, RoadmapGroup } from '../../../data/dev-tools-data';
import { roadmapGroups } from '../../../data/dev-tools-data';

function statusIcon(status: RoadmapStatus) {
  switch (status) {
    case 'completed':
      return <CheckCircle size={16} className="devtools__roadmap-task-icon--completed" />;
    case 'in-progress':
      return <Clock size={16} className="devtools__roadmap-task-icon--in-progress" />;
    case 'planned':
      return <Circle size={16} className="devtools__roadmap-task-icon--planned" />;
  }
}

function statusLabel(status: RoadmapStatus) {
  switch (status) {
    case 'completed': return 'Done';
    case 'in-progress': return 'Active';
    case 'planned': return 'Planned';
  }
}

function RoadmapGroupSection({ group }: { group: RoadmapGroup }) {
  const groupCompleted = group.tasks.filter((t) => t.status === 'completed').length;
  return (
    <div className="devtools__roadmap-group">
      <div className="devtools__roadmap-group-header">
        <h4 className="devtools__roadmap-group-title">
          {group.icon}
          {group.title}
        </h4>
        <span className="devtools__roadmap-group-count">
          {groupCompleted}/{group.tasks.length}
        </span>
      </div>

      <div className="devtools__roadmap-tasks">
        {group.tasks.map((task) => (
          <div key={task.name} className="devtools__roadmap-task">
            <div className="devtools__roadmap-task-icon">
              {statusIcon(task.status)}
            </div>
            <div className="devtools__roadmap-task-content">
              <p className="devtools__roadmap-task-name">{task.name}</p>
              {task.meta && (
                <p className="devtools__roadmap-task-meta">{task.meta}</p>
              )}
            </div>
            <span className={`devtools__roadmap-task-badge devtools__roadmap-task-badge--${task.status}`}>
              {statusLabel(task.status)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DevToolsRoadmap() {
  const allTasks = roadmapGroups.flatMap((g) => g.tasks);
  const completedTasks = allTasks.filter((t) => t.status === 'completed').length;
  const progressPercent = Math.round((completedTasks / allTasks.length) * 100);

  const generalGroups = roadmapGroups.filter((g) => g.category === 'general');
  const projectGroups = roadmapGroups.filter((g) => g.category === 'project');

  return (
    <div className="devtools__roadmap">
      <div className="devtools__roadmap-header">
        <Crosshair size={20} />
        <h2 className="devtools__roadmap-title">Project Roadmap</h2>
      </div>
      <p className="devtools__roadmap-subtitle">
        Track the status of all general infrastructure and project-specific
        tasks. {completedTasks} of {allTasks.length} tasks complete ({progressPercent}%).
      </p>

      {/* Overall progress bar */}
      <div className="devtools__roadmap-progress" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="devtools__roadmap-progress-bar"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* General Tasks */}
      <h3 className="wp-font-primary wp-text-h4 wp-font-bold wp-text-foreground wp-mb-6">
        General Tasks
      </h3>
      {generalGroups.map((group) => (
        <RoadmapGroupSection key={group.title} group={group} />
      ))}

      {/* Project Tasks */}
      <h3 className="wp-font-primary wp-text-h4 wp-font-bold wp-text-foreground wp-mb-6 wp-mt-12">
        Project Tasks
      </h3>
      {projectGroups.map((group) => (
        <RoadmapGroupSection key={group.title} group={group} />
      ))}

      {/* Summary */}
      <div className="devtools__roadmap-summary">
        <div className="devtools__roadmap-summary-card">
          <div className="devtools__roadmap-summary-value">100%</div>
          <div className="devtools__roadmap-summary-label">Design Tokens</div>
        </div>
        <div className="devtools__roadmap-summary-card">
          <div className="devtools__roadmap-summary-value">{completedTasks}</div>
          <div className="devtools__roadmap-summary-label">Tasks Done</div>
        </div>
        <div className="devtools__roadmap-summary-card">
          <div className="devtools__roadmap-summary-value">117</div>
          <div className="devtools__roadmap-summary-label">Routes</div>
        </div>
        <div className="devtools__roadmap-summary-card">
          <div className="devtools__roadmap-summary-value">LSX</div>
          <div className="devtools__roadmap-summary-label">Ready</div>
        </div>
      </div>
    </div>
  );
}
