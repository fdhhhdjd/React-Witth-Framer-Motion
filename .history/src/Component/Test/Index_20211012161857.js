import React from "react";
import { motion } from "framer-motion";
const Index = () => {
  const [selectedId, setSelectedId] = useState(items);
  const items = [
    { id: 1, subtitle: "taiheo", title: "taidep trai" },
    { id: 2, subtitle: "taiheo", title: "taidep trai" },
  ];
  return (
    <div>
      <AnimateSharedLayout type="crossfade">
        {items.map((item) => (
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Index;
