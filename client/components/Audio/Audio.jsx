const Audio = ({ audio }) => {
  return (
    <div>
      <div className="mt-4 mb-4 custom-audio-player-container">
        <audio id="custom-audio" className="custom-audio-player">
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div
          className="custom-audio-player-button"
          onClick={() => {
            const audio = document.getElementById("custom-audio");
            if (audio.paused) {
              audio.play();
            } else {
              audio.pause();
            }
          }}
        >
          <svg
            className="custom-audio-player-button-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Audio;
