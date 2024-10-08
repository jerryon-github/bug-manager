import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingAddBugPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton />
      <Skeleton height={"20rem"} />
      <Skeleton width={"8rem"} />
    </Box>
  );
};

export default LoadingAddBugPage;
