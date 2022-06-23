import { Peer } from 'peerjs'
import './style.css'

function main() {
    const peer = new Peer()

    peer.on('open', () => {
        console.log('Peer opened', peer.id)
        console.log('Room URL:', `${window.location.origin}/?peerId=${peer.id}`)

        const params = new URLSearchParams(document.location.search)
        const otherPeerId = params.get('peerId')

        if (otherPeerId != null) {
            console.log('Connecting to peer', otherPeerId)
            const conn = peer.connect(otherPeerId)

            conn.on('open', () => {
                conn.send('hi!')
            })
        }
    })

    peer.on('connection', (conn) => {
        conn.on('data', (data) => {
            console.log(data)
        })
    })
}

main()
