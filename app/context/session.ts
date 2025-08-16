import type { User } from "better-auth";
import { unstable_createContext } from "react-router";

export const sessionContext = unstable_createContext<{ user: User | null }>();
