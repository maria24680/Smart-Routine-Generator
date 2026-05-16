export async function POST(req) {
  try {
    const tasks = await req.json();

    // Priority অনুযায়ী sort
    const sorted = [...tasks].sort(
      (a, b) => b.priority - a.priority
    );

    let startHour = 8;

    const routine = sorted.map((task) => {
      const item = {
        task: task.name,
        time: `${startHour}:00 AM`,
      };

      startHour += 2;

      return item;
    });

    return Response.json(routine);
  } catch (error) {
    return Response.json(
      { error: "Failed to generate routine" },
      { status: 500 }
    );
  }
}