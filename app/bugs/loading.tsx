import { Button, Flex, Table, Text } from "@radix-ui/themes";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BugLoading = () => {
  const bugs = [1, 2, 3, 4, 5, 6];

  return (
    <div className="space-y-4">
      <Text weight="bold">All Bugs</Text>

      <Flex justify="between">
        <Skeleton />
      </Flex>
      
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Bugs</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Date
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bugs.map((bug) => (
            <Table.Row key={bug}>
              <Table.Cell>
                <Skeleton />
                <small className="block mt-2 md:hidden">
                  <Skeleton />
                </small>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default BugLoading;
