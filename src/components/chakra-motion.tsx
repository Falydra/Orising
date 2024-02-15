import { motion } from "framer-motion";
import { Box, BoxProps } from "@chakra-ui/react";

export const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

{
  /* {Array.from({ length: 10 }).map((_) => (
          <MotionBox
            mx={"5.7rem"}
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <Avatar
              h={"12rem"}
              w={"12rem"}
              size={"2xl"}
              name="Aly"
              src="/IMG_20230214_202043_685.jpg"
              alignSelf={"center"}
            />
          </MotionBox>
        ))} */
}
