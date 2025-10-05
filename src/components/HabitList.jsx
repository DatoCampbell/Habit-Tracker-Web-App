import HabitItem from './HabitItem';

function HabitList({ habits, completions, onToggleComplete, onEditHabit, onDeleteHabit }) {
  const today = new Date().toISOString().split('T')[0];

  const getStreak = (habitId) => {
    const habitCompletions = completions[habitId] || [];
    if (!habitCompletions.includes(today)) return 0;

    let streak = 0;
    let date = new Date(today);
    while (habitCompletions.includes(date.toISOString().split('T')[0])) {
      streak++;
      date.setDate(date.getDate() - 1);
    }
    return streak;
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Your Habits</h2>
      {habits.length === 0 ? (
        <p className="text-gray-500">No habits yet. Add one above!</p>
      ) : (
        habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            isCompletedToday={(completions[habit.id] || []).includes(today)}
            streak={getStreak(habit.id)}
            onToggleComplete={onToggleComplete}
            onEdit={onEditHabit}
            onDelete={onDeleteHabit}
          />
        ))
      )}
    </div>
  );
}

export default HabitList;