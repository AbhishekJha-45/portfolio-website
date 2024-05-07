import { NextResponse } from "next/server";

export async function POST(req) {
  const request = await req.json();
  const city = request.city;
  const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  try {
    const response = await fetch(uri, { next: { revalidate: 1 } });
    if (response.ok) {
      const weatherData = await response.json();
      return NextResponse.json(
        { message: "Request Received Successfully", payload: weatherData },
        { status: 200 }
      );
    } else if (response.ok !== true) {
      console.error(`Invalid City Name: ${response.status}`);
      return NextResponse.error("Error :Invalid City Name", {
        status: response.status,
      });
    } else {
      console.error(`Failed to fetch data. Status: ${response.status}`);
      return NextResponse.error("Failed to fetch data", {
        status: response.status,
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error("Error fetching data", { status: 500 });
  }
}
