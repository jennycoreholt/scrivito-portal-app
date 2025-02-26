import { provideEditingConfig } from 'scrivito'
import { PersonCardWidget } from './PersonCardWidgetClass'
import { classNameToThumbnail } from '../../utils/classNameToThumbnail'

provideEditingConfig(PersonCardWidget, {
  title: 'Person Card',
  thumbnail: classNameToThumbnail('PersonCardWidget'),
  properties: ['person'],
})
