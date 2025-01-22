const VideoSection = () => {
  return (
    <section>
      <video
        controls
        className="md:mx-auto w-full md:w-[80%] lg:w-[60%] h-full"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;
