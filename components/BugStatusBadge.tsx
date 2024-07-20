import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "OPEN", color: "red" },
  IN_PROGRESS: { label: "IN_PROGRESS", color: "violet" },
  CLOSED: { label: "CLOSED", color: "green" },
};

const BugStatusBadge = ({status}: { status: Status }) => {
  return <Badge color={statusMap[status].color}>
    {statusMap[status].label}
    </Badge>;
};

export default BugStatusBadge;