import { Button } from '@/components/base/buttons/button';
import type { LibraryProcessingCommand, ProcessingSpeed } from './library-processing';
export function ProcessingActions({ busy, occupied = false, libraryId, onRun, onOccupied }: {
  busy: boolean; occupied?: boolean; scan?: boolean; metadataOnly?: boolean; speedMode?: ProcessingSpeed;
  pendingCount?: number; libraryId?: string; libraryName?: string;
  onRun(command: LibraryProcessingCommand): void | Promise<unknown>; onOccupied?(): void;
}) {
  return <Button disabled={busy} onClick={() => {
    if (occupied) { onOccupied?.(); return; }
    void onRun({ stage: 'scan', ...(libraryId ? { library_id: libraryId } : {}) });
  }}>扫描漫画目录</Button>;
}
