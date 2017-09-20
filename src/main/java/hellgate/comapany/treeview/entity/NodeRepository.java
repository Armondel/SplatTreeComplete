package hellgate.comapany.treeview.entity;

import org.springframework.data.repository.CrudRepository;

public interface NodeRepository extends CrudRepository<Node, Integer> {

    Node findById(Integer nodeId);
}
