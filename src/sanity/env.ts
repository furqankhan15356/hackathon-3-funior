export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skBlh8LfnApmm7UASAFfnWAxptTKRLq9AUrW6hZRg2XcVN0DSHdTqcFpHdwVMHeg64O3B0CNafqLZ9mhTkj3u3c3YDvajZKRsJ0p1mth7zHjTbJmCxNKn4lFSs4X6256uiYQWbQxWURQLrQRX7QkjuScv59Fsjizm32RxUhCLcxRBbrCYzlM",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
