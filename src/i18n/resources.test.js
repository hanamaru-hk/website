import { describe, expect, it } from 'vitest'
import { zhHant } from './resources.js'

describe('Traditional Chinese translations', () => {
  it('contains the complete migrated content set', () => {
    expect(Object.keys(zhHant)).toHaveLength(84)
    expect(zhHant['hero.sub']).toContain('度身訂造軟件')
    expect(zhHant['f6.a']).toContain('info@hanamaru-solutions.hk')
  })
})
