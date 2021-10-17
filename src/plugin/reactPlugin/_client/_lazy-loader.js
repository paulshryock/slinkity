import { SLINKITY_REACT_MOUNT_POINT, SLINKITY_ATTRS } from '../../../utils/consts'
import { toMountPointById } from './toMountPointById'

const options = {
  rootMargin: '0px 0px 0px 0px',
  threshold: 0,
}

export default function lazyLoader({
  id,
  index,
  componentImporter = () => () => null,
  props = {},
}) {
  const observer = new IntersectionObserver(async function (entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const mountPoint = toMountPointById(id, index)
        if (!mountPoint.getAttribute('data-s-is-hydrated')) {
          const { default: renderComponent } = await import('./_renderer')
          const { default: Component } = await componentImporter()
          renderComponent({ mountPoint, Component, props })
          mountPoint.setAttribute('data-s-is-hydrated', true)
        }
      }
    }
  }, options)
  observer.observe(toMountPointById(id, index))
}
