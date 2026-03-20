# Optimise React — React-Specific Performance

**Type:** Sub-Trigger  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise react`  
**Parent Orchestrator:** `optimise`  
**Repeatable:** Yes  
**Estimated Duration:** 45-50 minutes

---

## Purpose

Optimize React-specific performance by identifying unnecessary re-renders, optimizing useMemo/useCallback usage, finding React.memo candidates, optimizing key props, and improving Context usage.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Audit Scope (5 Areas)

### 1. Identify Unnecessary Re-Renders

**Scan for:** Components re-rendering when props/state haven't changed

**Tools:** Add console.log or React DevTools Profiler mentally

```tsx
// Identify re-render causes:
// - Parent component re-renders
// - Context value changes
// - Props reference changes
// - Inline function/object creation

// Before: Inline object creation causes re-render
function ParentComponent() {
  return <ChildComponent style={{ color: 'red' }} />; // ❌ New object every render
}

// After: Stable reference
const childStyle = { color: 'var(--primary)' }; // ✅ Defined outside component

function ParentComponent() {
  return <ChildComponent style={childStyle} />;
}
```

---

### 2. Optimize useMemo/useCallback Usage

**Scan for:** Missing or excessive memoization

**When to use `useMemo`:**
- Expensive calculations
- Creating complex objects/arrays passed as props
- Filtering/sorting large datasets

**When to use `useCallback`:**
- Functions passed as props to memoized components
- Functions used as dependencies in other hooks
- Event handlers in frequently re-rendering components

```tsx
// Example: Proper memoization
function DataTable({ data, onRowClick }) {
  // ✅ Memoize expensive filtering
  const filteredData = useMemo(() => 
    data.filter(item => item.active).sort((a, b) => a.name.localeCompare(b.name)),
    [data]
  );
  
  // ✅ Memoize callback passed to child components
  const handleRowClick = useCallback((id) => {
    onRowClick(id);
  }, [onRowClick]);
  
  return (
    <div>
      {filteredData.map(item => (
        <Row key={item.id} data={item} onClick={handleRowClick} />
      ))}
    </div>
  );
}
```

---

### 3. Find React.memo Candidates

**Scan for:** Pure components that should be memoized

**Candidates:**
- Components that receive same props frequently
- List item components
- Complex components with expensive rendering
- Leaf components in component tree

```tsx
// Before: Re-renders even with same props
function ListItem({ title, description, onClick }) {
  return (
    <div className="wp-list-item" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// After: Memoized to prevent unnecessary re-renders
const ListItem = React.memo(function ListItem({ title, description, onClick }) {
  return (
    <div className="wp-list-item" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
});

// For custom comparison
const ListItem = React.memo(
  function ListItem({ title, description, onClick }) {
    // ... component
  },
  (prevProps, nextProps) => {
    // Custom comparison logic
    return prevProps.title === nextProps.title &&
           prevProps.description === nextProps.description;
  }
);
```

---

### 4. Optimize Key Props

**Scan for:** Improper key usage in lists

```tsx
// ❌ Avoid: Index as key (causes issues with reordering)
{items.map((item, index) => (
  <Card key={index} {...item} />
))}

// ❌ Avoid: Non-unique keys
{items.map(item => (
  <Card key={item.type} {...item} /> // Multiple items might have same type
))}

// ✅ Correct: Stable, unique identifier
{items.map(item => (
  <Card key={item.id} {...item} />
))}

// ✅ Correct: Composite key if no unique ID
{items.map(item => (
  <Card key={`${item.type}-${item.slug}`} {...item} />
))}
```

---

### 5. Optimize Context Usage

**Scan for:** Context causing excessive re-renders

**Strategy 1: Split contexts**

```tsx
// Before: Single large context
const AppContext = React.createContext({
  user: null,
  theme: 'light',
  settings: {},
  // ... many values
});

// After: Split into separate contexts
const UserContext = React.createContext(null);
const ThemeContext = React.createContext('light');
const SettingsContext = React.createContext({});

// Components only re-render when their specific context changes
```

**Strategy 2: Memoize context value**

```tsx
// Before: Context value recreated every render
function AppProvider({ children }) {
  const value = {
    user: currentUser,
    updateUser: setCurrentUser,
  };
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// After: Memoized value
function AppProvider({ children }) {
  const value = useMemo(() => ({
    user: currentUser,
    updateUser: setCurrentUser,
  }), [currentUser]);
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
```

**Strategy 3: Separate state and dispatch**

```tsx
// Split context into state and dispatch
const StateContext = React.createContext(null);
const DispatchContext = React.createContext(null);

// Components that only need dispatch won't re-render on state changes
function MyComponent() {
  const dispatch = useContext(DispatchContext); // No re-renders
  return <button onClick={() => dispatch({ type: 'ACTION' })}>Click</button>;
}
```

---

## React Performance Checklist

### Re-Render Optimization
- [ ] No inline object/array creation in JSX
- [ ] No inline function creation (use useCallback)
- [ ] Props are stable references
- [ ] Context values are memoized

### Memoization
- [ ] Expensive calculations use useMemo
- [ ] Event handlers use useCallback
- [ ] Pure components use React.memo
- [ ] Custom hooks memoize return values

### Lists
- [ ] All lists have unique, stable keys
- [ ] No index as key
- [ ] List items are memoized
- [ ] Large lists consider virtualization

### Context
- [ ] Contexts are split by update frequency
- [ ] Context values are memoized
- [ ] Separate state/dispatch contexts
- [ ] Consumers only subscribe to needed values

---

## Success Metrics

| Metric | Target |
|---|---|
| Unnecessary re-renders | Reduce by 80% |
| useMemo/useCallback coverage | 100% where needed |
| React.memo candidates | 100% identified and wrapped |
| Improper key usage | 0 |
| Context optimizations | 100% providers memoized |

---

## Deliverables

1. **Audit Report:** `/reports/YYYY-MM/react-optimisation-report-[date].md`
2. **Task List:** Add tasks to `/tasks/task-list.md`
3. **CHANGELOG Entry:** Document React optimizations

---

**Prompt Location:** `/prompts/optimise-react.md`  
**Category:** Optimisation  
**Difficulty:** Medium-High  
**Estimated Duration:** 45-50 minutes
