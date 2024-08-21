
import { QueryProvider } from "@/components/providers/query-provider";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {


    return (
        <main>

            <QueryProvider>

                {children}
            </QueryProvider>
        </main>
    );
}

export default HomeLayout;