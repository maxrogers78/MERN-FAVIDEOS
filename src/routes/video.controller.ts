import { RequestHandler } from "express";
import Video from "./Video";

const createVideo: RequestHandler = async (req, res) => {
  try {
    const foundVideo = await Video.findOne({ url: req.body.url });

    if (foundVideo) {
      return res.status(301).json({
        message: "video already exists",
      });
    }

    const createdVideo = new Video(req.body);
    const savedVideo = await createdVideo.save();

    return res.json(savedVideo);
  } catch (error) {
    res.json({ message: "an error ocurred" });
  }
};

const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();

    return res.json(videos);
  } catch (error) {
    res.json({ message: "an error ocurred" });
  }
};

const getVideo: RequestHandler = async (req, res) => {
  try {
    const videoId = req.params.id;

    const foundVideo = await Video.findById(videoId);

    if (!foundVideo) {
      return res.status(204).json();
    }

    return res.json(foundVideo);
  } catch (error) {
    res.json({ message: "an error ocurred" });
  }
};

const deleteVideo: RequestHandler = async (req, res) => {
  try {
    const videoId = req.params.id;

    const foundVideo = await Video.findByIdAndDelete(videoId);

    if (!foundVideo) {
      return res.status(204).json();
    }

    return res.json(foundVideo);
  } catch (error) {
    res.json({ message: "an error ocurred" });
  }
};

const updateVideo: RequestHandler = async (req, res) => {
  try {
    const videoId = req.params.id;
    const updatedVideo = await Video.findByIdAndUpdate(videoId, req.body, {
      new: true,
    });

    if (!updateVideo) {
      return res.status(204).json();
    }

    return res.json(updatedVideo);
  } catch (error) {
    res.json({ message: "an error ocurred" });
  }
};

export { createVideo, getVideos, getVideo, deleteVideo, updateVideo };
