"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { Spinner } from "@/components/spinner";
import axios from "axios";

interface User {
  id: string;
  name: string;
  credits: number;
}

const Leaderboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/users/getleaderboard"
        );

        setUsers(response.data.data);
      } catch (error) {
        console.error("Failed to fetch leaderboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <Spinner size="lg" />;
  }

  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Leaderboard</h1>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableCell className="text-left font-semibold">Rank</TableCell>
            <TableCell className="text-left font-semibold">User</TableCell>
            <TableCell className="text-right font-semibold">
              Credit Coins
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>
                <Badge>{index + 1}</Badge>
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell className="text-right">{user.credits}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Leaderboard;
