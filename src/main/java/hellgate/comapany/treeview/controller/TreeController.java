package hellgate.comapany.treeview.controller;


import hellgate.comapany.treeview.entity.Node;
import hellgate.comapany.treeview.entity.NodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/demo")
public class TreeController {

    @Autowired
    private NodeRepository nodeRepository;

    @GetMapping(path = "/add")
    public @ResponseBody String addNewUser (@RequestParam String nodeName, @RequestParam Integer parentId){
         Node n = new Node();
         n.setName(nodeName);
         n.setParent(parentId);
         nodeRepository.save(n);
         return "Saved";
    }

    @GetMapping(path = "/update")
    public @ResponseBody String updateCurrentUser (@RequestParam Integer nodeId, @RequestParam String nodeName){
        Node n = nodeRepository.findOne(nodeId);
        n.setName(nodeName);
        nodeRepository.save(n);
        return "Name Changed";
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Node> getAllUsers(){
        return nodeRepository.findAll();
    }

    @GetMapping(path = "/findById")
    public @ResponseBody Node getNodeById(@RequestParam Integer nodeId){
        return nodeRepository.findById(nodeId);
    }

}
