---
import TutorCard from "~/components/tutor/tutor-card.astro";
import TutorCardContent from "~/components/tutor/tutor-card-content.astro";
import StarRating from "~/components/ui/star-rating";

interface MentorCard {
  id: number;
  name: string;
  subject: string;
  image: string;
}

const mentors: MentorCard[] = [
  {
    id: 1,
    name: "Joan Budiono",
    subject: "Matematika & Fisika SMA",
    image: "/mentors/joan.jpg",
  },
  {
    id: 2,
    name: "Sinta Wiratama",
    subject: "Bahasa Inggris",
    image: "/mentors/sinta.jpg",
  },
  {
    id: 3,
    name: "Ahmad Rizky",
    subject: "Kimia",
    image: "/mentors/rizky.jpg",
  },
  {
    id: 4,
    name: "Livia Arifin",
    subject: "Ekonomi",
    image: "/mentors/livia.jpg",
  },
  {
    id: 5,
    name: "Raka Saputra",
    subject: "Biologi",
    image: "/mentors/raka.jpg",
  },
];

const centerIndex = Math.floor(mentors.length / 2);
---

<div class="relative w-full flex justify-center items-center py-10 overflow-x-clip">
  <div class="flex gap-6 md:gap-8 lg:gap-10 justify-center items-end">
    {mentors.map((tutor, i) => {
      const isCenter = i === centerIndex;
      const scale = isCenter ? "scale-110" : "scale-90";
      const opacity = isCenter ? "opacity-100" : "opacity-70";
      const zIndex = isCenter ? "z-20" : "z-10";
      const translateX = i === 0 ? "translate-x-6" : i === mentors.length - 1 ? "-translate-x-6" : "";

      return (
        <div
          class={`flex-shrink-0 transform transition-all duration-300 w-[180px] sm:w-[200px] md:w-[240px] lg:w-[260px] aspect-[264/327] ${scale} ${opacity} ${zIndex} ${translateX}`}
        >
          <TutorCard backgroundImage={tutor.image} class="h-96">
            <TutorCardContent>
              <div class="flex items-start justify-between mb-1.5">
                <h3 class="text-xl font-bold text-gray-900 line-clamp-2">
                  {tutor.name}
                </h3>
                <div class="flex-shrink-0">
                  <StarRating
                    value={4.5}
                    readOnly
                    responsiveSize="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                    className="align-middle"
                  />
                </div>
              </div>

              <div class="border-t-2 border-gray-200 pt-1.5">
                <p class="text-xs text-gray-600">Spesialisasi:</p>
                <p class="text-lg font-semibold text-gray-900 line-clamp-1">
                  {tutor.subject}
                </p>
              </div>
            </TutorCardContent>
          </TutorCard>
        </div>
      );
    })}
  </div>
</div>
