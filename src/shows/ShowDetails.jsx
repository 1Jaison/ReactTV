import { useState } from "react";
import EpisodeList from "./EpisodeList";
import EpisodeDetails from "./EpisodeDetails";
import "./shows.css";

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
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />

      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
