"use strict";
class P2PNode {
    constructor(nodeName) {
        this.peers = [];
        this.nodeName = nodeName;
    }
    connect(peer) {
        this.peers.push(peer);
        peer.peers.push(this);
    }
    broadcast(data) {
        this.peers.forEach((peer) => {
            peer.receive(data);
        });
    }
    receive(data) {
        console.log(`Received data ${this.nodeName}: ${data}`);
    }
}
const node1 = new P2PNode("Nodeone");
const node2 = new P2PNode("Nodetwo");
node1.connect(node2);
node1.broadcast("Hello, world!");
//# sourceMappingURL=index.js.map