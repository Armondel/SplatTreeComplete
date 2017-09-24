package hellgate.company.treeview.controller;


import hellgate.company.treeview.entity.Node;
import hellgate.company.treeview.repository.NodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class TreeController {

    @Autowired
    private NodeRepository nodeRepository;

    @RequestMapping(path = "/")
    public String getTreeView(){
        return "src/main/webapp/index.jsp";
    }

    //Create button
    @PostMapping(path = "/add")
    public @ResponseBody Node addNewUser (@RequestParam String name, @RequestParam Integer parent){
         Node n = new Node();
         n.setName(name);
         n.setParent(parent);
         nodeRepository.save(n);
         return n;
    }

    //Rename button
    @PostMapping(path = "/rename")
    public @ResponseBody boolean updateCurrentUser (@RequestParam Integer id, @RequestParam String name){
        Node n = nodeRepository.findOne(id);
        n.setName(name);
        nodeRepository.save(n);
        return true;
    }

    //Delete button
    @PostMapping(path = "/delete")
    public @ResponseBody void deleteCurrentNode (@RequestParam Integer id){
        if (nodeRepository.findNodesByParent(id) != null){
            for (Node node:nodeRepository.findNodesByParent(id)) {
                deleteCurrentNode(node.getId());
            }
        }
        nodeRepository.delete(id);
    }

    @PostMapping(path = "/move")
    public @ResponseBody boolean moveNode(@RequestParam Integer id, @RequestParam Integer parent){
        Node n = nodeRepository.findOne(id);
        n.setParent(parent);
        nodeRepository.save(n);
        return true;
    }

    @GetMapping(path = "/findByParent")
    public @ResponseBody Iterable<Node> getNodeByParent(@RequestParam Integer id){
        return nodeRepository.findNodesByParent(id);
    }

}
