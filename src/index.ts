// P2P Node class definition
class P2PNode {
    peers: P2PNode[];
    nodeName: String;
  
    constructor(nodeName:String) {
      this.peers = []; // List of connected peers
      this.nodeName = nodeName;
    }
  
    connect(peer: P2PNode) {
      this.peers.push(peer); // Add peer to list of connected peers
      peer.peers.push(this); // Connect back to the peer
    }
  
    broadcast(data: any) {
      // Send data to all connected peers
      this.peers.forEach((peer) => {
        peer.receive(data);
      });
    }
  
    receive(data: any) {
      // Handle received data
      console.log(`Received data ${this.nodeName}: ${data}`);
    }
  }
  
  // Usage example
  const node1 = new P2PNode("Nodeone");
  const node2 = new P2PNode("Nodetwo");
  
  node1.connect(node2);
  
  node1.broadcast("Hello, world!"); // Prints "Received data: Hello, world!" on node2
  