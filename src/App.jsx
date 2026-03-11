import { useState } from "react";
import data from "./shows/data"; // data.js is in the shows folder
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

/**
 * React TV is a web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  // state for all shows
  const [shows] = useState(data);

  // state for the currently selected show
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>

      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
