import { RequestHandler } from "express";

const createVideo: RequestHandler = (req, res) => {
  res.json("creating video");
};

const getVideos: RequestHandler = (req, res) => {
  res.json("getting videos");
};

const getVideo: RequestHandler = (req, res) => {
  res.json("getting video");
};

const deleteVideo: RequestHandler = (req, res) => {
  res.json("deleting video");
};

const updateVideo: RequestHandler = (req, res) => {
  res.json("updating video");
};

export { createVideo, getVideos, getVideo, deleteVideo, updateVideo };
