import { Point2D } from "../../util/types";
import square from "../square/square";

const distance2D = (point1: Point2D, point2: Point2D): number => {
  return Math.sqrt(square(point2.x - point1.x) + square(point2.y - point1.y));
};

export default distance2D;
