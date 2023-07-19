import { useRouter } from 'next/navigation';

import { Button } from '@/components/backButton/components/button';
import { BackIcon } from '@/components/icons/back';

export const BackButton = ({ route }: { route: string }) => {
  const router = useRouter();

  function handleNavigate() {
    router.push(route);
  }

  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  );
};
