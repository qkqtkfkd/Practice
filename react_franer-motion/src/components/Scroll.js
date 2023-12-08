import {useEffect} from "react";
import "./Scroll.css";
import { motion, useScroll } from "framer-motion";

export function Scroll() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="container">
        <motion.div className="bar" style={{scaleX:scrollYProgress}}/>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            justo ac enim consectetur vestibulum. Ut egestas neque nisi, ut
            viverra turpis porttitor feugiat. Pellentesque sit amet accumsan ex.
            Aliquam non neque felis. Sed commodo, nulla id sodales condimentum,
            dolor lectus consectetur nunc, ac pellentesque quam libero in
            tellus. Maecenas id ex in dui tempus consequat. Suspendisse aliquam
            mattis est, vitae tempus tortor ullamcorper ac. Sed interdum, dolor
            vel suscipit scelerisque, turpis risus imperdiet metus, a lobortis
            neque magna quis tellus. Duis feugiat a metus eget aliquam.
          </p>
        </div>
        <div>
          <p>
            Phasellus ut ipsum vel sapien ultrices ornare quis ac neque. Duis
            sit amet justo tempus, imperdiet quam et, dignissim enim. Duis eu
            accumsan orci. Morbi non justo purus. Donec auctor mi ut turpis
            posuere posuere. Cras sit amet ex at tellus vestibulum consectetur
            quis nec sapien. Mauris maximus neque eget dui cursus fermentum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Suspendisse vitae ex nec neque scelerisque
            viverra.
          </p>
        </div>
        <div>
          <p>
            Nam condimentum euismod accumsan. Aliquam ut libero in est sagittis
            finibus ac et massa. In vehicula dapibus dignissim. Curabitur
            molestie efficitur ex eget efficitur. Phasellus congue rutrum sapien
            sit amet dictum. Aenean sed tincidunt risus. Suspendisse non lacus
            et massa consectetur volutpat at a quam. Donec eget risus enim. Ut
            in diam a ipsum lacinia commodo. Donec tempor sodales ex. Nam ac
            massa a nunc aliquet auctor. Duis ut mi sit amet nisi volutpat
            placerat.
          </p>
        </div>
        <div>
          <p>
            Pellentesque accumsan metus vitae diam dictum pellentesque. Nulla
            mauris purus, iaculis ut odio nec, iaculis mollis est. Nulla
            tristique dolor dui, et tincidunt mauris pharetra vitae. Nullam
            efficitur sapien vitae eleifend viverra. Fusce sed laoreet felis, ac
            venenatis felis. Curabitur id mi enim. Morbi ante justo, dictum vel
            erat commodo, ornare interdum diam. Vestibulum et imperdiet tellus.
            Donec lorem est, imperdiet sollicitudin tortor quis, molestie
            tincidunt enim. Donec rutrum vel nunc dictum venenatis. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Praesent eget odio at velit suscipit finibus id eget
            purus. Nullam consectetur libero tortor, sit amet dictum libero
            suscipit vitae. Vestibulum volutpat nec tellus ut laoreet. Nulla
            eget blandit tellus.
          </p>
        </div>
        <div>
          <p>
            Fusce sed dapibus quam. Nullam fringilla justo non elementum
            interdum. Nunc molestie ornare dolor nec consectetur. Etiam vel
            metus lacus. Cras porttitor metus pharetra augue rutrum lobortis.
            Vestibulum vitae turpis vitae quam dignissim mattis. Pellentesque
            interdum maximus lacus, at euismod risus facilisis ut. Curabitur
            quis velit ipsum. Nam rutrum neque ac porta pharetra. Integer
            vehicula libero vitae velit mattis porta nec eu ante. Curabitur
            gravida malesuada sem in placerat. Aliquam pretium nulla ut aliquet
            consectetur. Morbi malesuada interdum nunc, quis fringilla quam
            finibus in. Aenean viverra ex a massa mattis porttitor.
          </p>
        </div>
      </div>
    </>
  );
}
