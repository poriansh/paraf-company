"use client";

import {useEffect} from "react";
import {Tabs, TabsContent} from "@/shared/components/common/tabs/tabs";
import {Container} from "@/shared/components/layout/container";
import {ClubTabsHeader} from "@/features/CustomerClub/components/ClubTabsHeader";
import {VitrinClubProfile} from "@/features/CustomerClub/components/VitrinClubProfile";
import {useVitrinUsers} from "@/features/CustomerClub/services/useVitrinUsers";
import {useSelectedClub} from "@/features/CustomerClub/store/selectedClub";

export function CustomerClubSection() {
  const {data: vitrinUsers} = useVitrinUsers();
  const users = vitrinUsers ?? [];
  const selectedVitrinId = useSelectedClub((s) => s.selectedVitrinId);
  const setSelectedVitrinId = useSelectedClub((s) => s.setSelectedVitrinId);

  const activeId = selectedVitrinId ?? users[0]?.id;
  const tabValue = activeId ? String(activeId) : undefined;

  useEffect(() => {
    if (!users.length) return;
    if (selectedVitrinId && users.some((u) => u.id === selectedVitrinId)) return;
    const first = users[0];
    if (first) setSelectedVitrinId(first.id);
  }, [users, selectedVitrinId, setSelectedVitrinId]);

  return (
    <section className="pb-16 pt-4 sm:pb-20 sm:pt-6">
      <Container>
        <Tabs
          value={tabValue}
          onValueChange={(value) => setSelectedVitrinId(Number(value))}
          className="flex w-full flex-col gap-5"
        >
          <ClubTabsHeader users={users} />

          {users.map((user) => (
            <TabsContent
              key={user.id}
              value={String(user.id)}
              className="mt-0 focus-visible:ring-0"
            >
              {activeId === user.id ? (
                <VitrinClubProfile userVitrinId={user.id} />
              ) : null}
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}
