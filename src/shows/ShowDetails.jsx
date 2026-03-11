import { useState } from "react";
import "./shows.css";
import EpisodeList from "./EpisodeList";
import EpisodeDetails from "./EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <div className="show-details">
        <p>Please select a show.</p>
      </div>
    );
  }

  return (
    <div className="show-details">
      <h2>{show.name}</h2>

      <EpisodeList
        episodes={show.episodes}
        setSelectedEpisode={setSelectedEpisode}
      />

      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
