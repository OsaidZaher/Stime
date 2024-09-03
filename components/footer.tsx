import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold"> Stime</span>. All rights reserved.
        </p>
        <ToggleGroup type="single">
          <nav>
            <ToggleGroupItem value="About">
              <a href="/about" className="mx-2">
                About
              </a>
            </ToggleGroupItem>
            <ToggleGroupItem value="Contact">
              <a href="/contact" className="mx-2">
                Contact
              </a>
            </ToggleGroupItem>
            <ToggleGroupItem value="privacy">
              <a href="/privacy" className="mx-2">
                Privacy Policy
              </a>
            </ToggleGroupItem>
          </nav>
        </ToggleGroup>
      </div>
    </footer>
  );
}
