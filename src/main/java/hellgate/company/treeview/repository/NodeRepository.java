package hellgate.company.treeview.repository;

import hellgate.company.treeview.entity.Node;
import org.springframework.data.repository.CrudRepository;

public interface NodeRepository extends CrudRepository<Node, Integer> {

    Node findById(Integer nodeId);
}
