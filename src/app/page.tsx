import Client from '@/components/shared/client'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'

export default async function HomePage() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(
    trpc.createAI.queryOptions({ text: 'Otabek Prefetch from Server' })
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  )
}
