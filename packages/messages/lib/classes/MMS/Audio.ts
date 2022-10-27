import { AudioObject } from '../../interfaces/AudioObject'
import { AbstractAudioMessageObject } from '../AbstractAudioMessage'

export class Audio extends AbstractAudioMessageObject {
    public channel = 'mms'

    constructor(
        audio: AudioObject,
        to: string,
        from: string,
        clientRef?: string
    ) {
        super(audio, to, from, clientRef)
    }
}