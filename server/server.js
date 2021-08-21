Stream = require('node-rtsp-stream');

const streamSources = [
  'rtsp://admin:xindadong2020@103.17.90.47:601/Streaming/Channels/101',
  'rtsp://admin:xindadong2020@103.17.90.47:602/Streaming/Channels/101',
  'rtsp://admin:Admin12345@103.17.90.61:554/Streaming/Channels/102',
  'rtsp://admin:xindadong2020@103.17.90.47:600/Streaming/Channels/101/',
];

let currentPort = 9996;

const startStreams = function () {
  streamSources.forEach(source => {
    const _ = new Stream({
      name: `Streaming source ${source}`,
      streamUrl: source,
      wsPort: currentPort,
      ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30 // options with required values specify the value after the key
      }
    });
    currentPort++;
  });
};

startStreams();
